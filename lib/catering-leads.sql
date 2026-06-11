-- Catering leads table
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS catering_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Location
  city          TEXT NOT NULL,
  state_region  TEXT,

  -- Event details
  event_date    DATE NOT NULL,
  event_type    TEXT NOT NULL,
  guest_count   INTEGER NOT NULL CHECK (guest_count > 0),

  -- Food preferences
  cuisine_types       TEXT[]  NOT NULL DEFAULT '{}',
  service_style       TEXT    NOT NULL,
  dietary_requirements TEXT[] NOT NULL DEFAULT '{}',

  -- Budget
  budget_range  TEXT NOT NULL,

  -- Contact
  first_name    TEXT NOT NULL,
  last_name     TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT,
  notes         TEXT,

  -- Lead management
  status        TEXT NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'lost')),
  source        TEXT NOT NULL DEFAULT 'homepage',

  -- Timestamps
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_catering_leads_status      ON catering_leads(status);
CREATE INDEX IF NOT EXISTS idx_catering_leads_event_date  ON catering_leads(event_date);
CREATE INDEX IF NOT EXISTS idx_catering_leads_email       ON catering_leads(email);
CREATE INDEX IF NOT EXISTS idx_catering_leads_created_at  ON catering_leads(created_at DESC);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_catering_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_catering_leads_updated_at ON catering_leads;
CREATE TRIGGER trg_catering_leads_updated_at
  BEFORE UPDATE ON catering_leads
  FOR EACH ROW EXECUTE FUNCTION update_catering_leads_updated_at();

-- Row Level Security: anyone can INSERT (it's a public form), nobody can read anonymously
ALTER TABLE catering_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit catering leads"
  ON catering_leads FOR INSERT
  WITH CHECK (true);

-- Only authenticated service-role reads (your admin dashboard / API)
CREATE POLICY "Service role can read all leads"
  ON catering_leads FOR SELECT
  USING (false);   -- anon blocked; service_role bypasses RLS entirely
