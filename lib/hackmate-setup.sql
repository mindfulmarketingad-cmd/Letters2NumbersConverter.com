-- Hackmate tables for the hackathon teammate-finder feature.
-- Run this entire script in the Supabase SQL Editor (Dashboard → SQL Editor → New query).
-- It is safe to run multiple times (idempotent).

-- ── 1. Tables ─────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS hackmate_profiles (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  name            TEXT NOT NULL,
  role            TEXT NOT NULL,
  skills          TEXT[] NOT NULL DEFAULT '{}',
  looking_for     TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hackmate_projects (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id        UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name              TEXT NOT NULL,
  description       TEXT NOT NULL,
  skills_needed     TEXT[] NOT NULL DEFAULT '{}',
  team_size_needed  INTEGER NOT NULL DEFAULT 3,
  current_team_size INTEGER NOT NULL DEFAULT 1,
  status            TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hackmate_project_applications (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id        UUID NOT NULL REFERENCES hackmate_projects(id) ON DELETE CASCADE,
  user_id           UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  applicant_name    TEXT,
  applicant_skills  TEXT[],
  applicant_message TEXT,
  status            TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (project_id, user_id)
);

-- ── 2. Indexes ────────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_hackmate_profiles_user_id   ON hackmate_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_hackmate_projects_creator    ON hackmate_projects(creator_id);
CREATE INDEX IF NOT EXISTS idx_hackmate_projects_status     ON hackmate_projects(status);
CREATE INDEX IF NOT EXISTS idx_hackmate_projects_created    ON hackmate_projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_hackmate_apps_project        ON hackmate_project_applications(project_id);
CREATE INDEX IF NOT EXISTS idx_hackmate_apps_user           ON hackmate_project_applications(user_id);

-- ── 3. Row Level Security ─────────────────────────────────────────────────────

ALTER TABLE hackmate_profiles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackmate_projects             ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackmate_project_applications ENABLE ROW LEVEL SECURITY;

-- Profiles: public read, owner write
DROP POLICY IF EXISTS "hackmate_profiles_select"  ON hackmate_profiles;
DROP POLICY IF EXISTS "hackmate_profiles_insert"  ON hackmate_profiles;
DROP POLICY IF EXISTS "hackmate_profiles_update"  ON hackmate_profiles;
DROP POLICY IF EXISTS "hackmate_profiles_delete"  ON hackmate_profiles;

CREATE POLICY "hackmate_profiles_select" ON hackmate_profiles FOR SELECT USING (true);
CREATE POLICY "hackmate_profiles_insert" ON hackmate_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "hackmate_profiles_update" ON hackmate_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "hackmate_profiles_delete" ON hackmate_profiles FOR DELETE USING (auth.uid() = user_id);

-- Projects: public read, creator write
DROP POLICY IF EXISTS "hackmate_projects_select" ON hackmate_projects;
DROP POLICY IF EXISTS "hackmate_projects_insert" ON hackmate_projects;
DROP POLICY IF EXISTS "hackmate_projects_update" ON hackmate_projects;
DROP POLICY IF EXISTS "hackmate_projects_delete" ON hackmate_projects;

CREATE POLICY "hackmate_projects_select" ON hackmate_projects FOR SELECT USING (true);
CREATE POLICY "hackmate_projects_insert" ON hackmate_projects FOR INSERT WITH CHECK (auth.uid() = creator_id);
CREATE POLICY "hackmate_projects_update" ON hackmate_projects FOR UPDATE USING (auth.uid() = creator_id);
CREATE POLICY "hackmate_projects_delete" ON hackmate_projects FOR DELETE USING (auth.uid() = creator_id);

-- Applications: applicant or project creator can read; only applicant can insert their own
DROP POLICY IF EXISTS "hackmate_apps_select"  ON hackmate_project_applications;
DROP POLICY IF EXISTS "hackmate_apps_insert"  ON hackmate_project_applications;
DROP POLICY IF EXISTS "hackmate_apps_update"  ON hackmate_project_applications;

CREATE POLICY "hackmate_apps_select" ON hackmate_project_applications FOR SELECT
  USING (
    auth.uid() = user_id OR
    auth.uid() = (SELECT creator_id FROM hackmate_projects WHERE id = project_id LIMIT 1)
  );
CREATE POLICY "hackmate_apps_insert" ON hackmate_project_applications FOR INSERT
  WITH CHECK (auth.uid() = user_id);
-- Only the project creator can update (accept/reject) applications
CREATE POLICY "hackmate_apps_update" ON hackmate_project_applications FOR UPDATE
  USING (
    auth.uid() = (SELECT creator_id FROM hackmate_projects WHERE id = project_id LIMIT 1)
  );
