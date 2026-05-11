'use client'

import { useState, useEffect } from 'react'
import { Mail, AlertCircle, LogOut, Trash2, Check, X, Users, Clock, Briefcase, Send, Plus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

// Types
interface HackerProfile {
  id: string
  user_id: string
  name: string
  role: string
  skills: string[]
  looking_for: string
  created_at: string
}

interface User {
  id: string
  email: string
}

interface Project {
  id: string
  creator_id: string
  name: string
  description: string
  skills_needed: string[]
  team_size_needed: number
  current_team_size: number
  status: 'open' | 'closed'
  created_at: string
}

interface ProjectApplication {
  id: string
  project_id: string
  user_id: string
  applicant_name: string | null
  applicant_skills: string[] | null
  applicant_message: string | null
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

// Hacker Card
function HackerCard({ hacker }: { hacker: HackerProfile }) {
  const initials = hacker.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-sm">
          {initials}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{hacker.name}</h3>
          <p className="text-sm text-muted-foreground">{hacker.role}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {hacker.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {hacker.looking_for && (
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
          {hacker.looking_for}
        </p>
      )}

      <button className="w-full bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm cursor-not-allowed opacity-60">
        <Mail size={16} />
        View Profile
      </button>
    </div>
  )
}

// Project Card - Job Board Style
function ProjectCard({ 
  project, 
  user,
  isCreator, 
  hasApplied, 
  onApplyClick, 
  onDelete,
  onManageClick 
}: { 
  project: Project
  user: User | null
  isCreator: boolean
  hasApplied: boolean
  onApplyClick: (projectId: string) => void
  onDelete: (projectId: string) => void
  onManageClick: (projectId: string) => void
}) {
  const postedDate = new Date(project.created_at)
  const daysAgo = Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
  const postedText = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                project.status === 'open'
                  ? 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400'
              }`}
            >
              {project.status === 'open' ? 'Recruiting' : 'Closed'}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={12} />
              {postedText}
            </span>
          </div>
          <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

      {/* Meta info */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Users size={14} />
          {project.current_team_size}/{project.team_size_needed} members
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={14} />
          {project.skills_needed.length} skills needed
        </span>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-1.5">
          {project.skills_needed.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-border">
        {isCreator ? (
          <>
            <button
              onClick={() => onManageClick(project.id)}
              className="flex-1 bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
            >
              <Users size={16} />
              View Applications
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="px-4 py-2.5 border border-border rounded-lg hover:bg-destructive/10 hover:border-destructive/50 transition-colors"
            >
              <Trash2 size={16} className="text-destructive" />
            </button>
          </>
        ) : !user ? (
          <Link
            href="/sign-in"
            className="w-full font-medium py-2.5 rounded-lg transition-colors text-sm bg-primary text-primary-foreground hover:opacity-90 text-center flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Sign In to Apply
          </Link>
        ) : hasApplied ? (
          <div className="w-full py-2.5 rounded-lg text-sm bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-center font-medium flex items-center justify-center gap-2">
            <Check size={16} />
            Application Submitted
          </div>
        ) : project.status === 'closed' ? (
          <div className="w-full py-2.5 rounded-lg text-sm bg-muted text-muted-foreground text-center font-medium">
            Applications Closed
          </div>
        ) : (
          <button
            onClick={() => onApplyClick(project.id)}
            className="w-full font-medium py-2.5 rounded-lg transition-all text-sm bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Apply Now
          </button>
        )}
      </div>
    </div>
  )
}

// Application Modal
function ApplicationModal({
  project,
  onClose,
  onSubmit,
  isSubmitting,
}: {
  project: Project
  onClose: () => void
  onSubmit: (data: { name: string; skills: string[]; message: string }) => void
  isSubmitting: boolean
}) {
  const [name, setName] = useState('')
  const [skills, setSkills] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const skillsArray = skills.split(',').map((s) => s.trim()).filter(Boolean)
    onSubmit({ name, skills: skillsArray, message })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Apply to Project</h2>
              <p className="text-sm text-muted-foreground mt-1">{project.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
            </label>
            <input
              type="text"
              required
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="e.g. React, Python, UI Design"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Looking for: {project.skills_needed.join(', ')}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Why do you want to join? <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              rows={3}
              placeholder="Tell the project creator why you'd be a great addition to the team..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send size={16} />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Find Hackers Tab
function FindHackers() {
  const [hackers, setHackers] = useState<HackerProfile[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHackers = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('hackmate_profiles')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setHackers(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load hackers')
      } finally {
        setLoading(false)
      }
    }

    fetchHackers()
  }, [])

  const filteredHackers = hackers.filter((hacker) => {
    const query = searchQuery.toLowerCase()
    return (
      hacker.name.toLowerCase().includes(query) ||
      hacker.role.toLowerCase().includes(query) ||
      hacker.skills.some((skill) => skill.toLowerCase().includes(query))
    )
  })

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading hackers...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 flex gap-2 items-start">
        <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
        <p className="text-sm">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Search by name, role, or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
        />
      </div>

      {hackers.length === 0 ? (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground mb-2">No hackers yet!</p>
          <p className="text-sm text-muted-foreground">
            Be the first to create a profile.
          </p>
        </div>
      ) : filteredHackers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hackers found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHackers.map((hacker) => (
            <HackerCard key={hacker.id} hacker={hacker} />
          ))}
        </div>
      )}
    </div>
  )
}

// Projects Tab
function Projects({ user, userProfile }: { user: User | null; userProfile: HackerProfile | null }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [applications, setApplications] = useState<ProjectApplication[]>([])
  const [managingProject, setManagingProject] = useState<string | null>(null)
  const [applyingToProject, setApplyingToProject] = useState<Project | null>(null)
  const [applyingLoading, setApplyingLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    skills: '',
    teamSize: '3',
  })
  const [submitLoading, setSubmitLoading] = useState(false)

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('hackmate_projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setProjects(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Fetch user applications
  useEffect(() => {
    if (!user) return

    const fetchApplications = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('hackmate_project_applications')
          .select('*')
          .eq('user_id', user.id)

        if (error) throw error
        setApplications(data || [])
      } catch (err) {
        console.error('Error loading applications:', err)
      }
    }

    fetchApplications()
  }, [user])

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSubmitLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const skills = formData.skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)

      if (skills.length === 0) {
        throw new Error('Please add at least one skill')
      }

      const { error: insertError } = await supabase.from('hackmate_projects').insert([
        {
          creator_id: user.id,
          name: formData.name,
          description: formData.description,
          skills_needed: skills,
          team_size_needed: parseInt(formData.teamSize),
        },
      ])

      if (insertError) throw insertError

      // Refresh projects
      const { data: updatedProjects } = await supabase
        .from('hackmate_projects')
        .select('*')
        .order('created_at', { ascending: false })
      
      setProjects(updatedProjects || [])
      setShowCreateForm(false)
      setFormData({ name: '', description: '', skills: '', teamSize: '3' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create project')
    } finally {
      setSubmitLoading(false)
    }
  }

  const handleApplyClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      setApplyingToProject(project)
    }
  }

  const handleSubmitApplication = async (data: { name: string; skills: string[]; message: string }) => {
    if (!user || !applyingToProject) return

    setApplyingLoading(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.from('hackmate_project_applications').insert([
        {
          project_id: applyingToProject.id,
          user_id: user.id,
          applicant_name: data.name,
          applicant_skills: data.skills,
          applicant_message: data.message || null,
        },
      ])

      if (error) throw error

      // Refresh applications
      const { data: updatedApps } = await supabase
        .from('hackmate_project_applications')
        .select('*')
        .eq('user_id', user.id)
      
      setApplications(updatedApps || [])
      setApplyingToProject(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application')
    } finally {
      setApplyingLoading(false)
    }
  }

  const handleDeleteProject = async (projectId: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('hackmate_projects')
        .delete()
        .eq('id', projectId)

      if (error) throw error

      setProjects(projects.filter((p) => p.id !== projectId))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete project')
    }
  }

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase()
    return (
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.skills_needed.some((skill) => skill.toLowerCase().includes(query))
    )
  })

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading projects...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 flex gap-2 items-start">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {managingProject && (
        <div className="p-4 bg-card border border-border rounded-lg">
          <button
            onClick={() => setManagingProject(null)}
            className="text-primary hover:underline text-sm mb-4"
          >
            ← Back to projects
          </button>
          <ProjectApplicationsManager 
            projectId={managingProject} 
            user={user}
            onBackClick={() => setManagingProject(null)}
          />
        </div>
      )}

      {!managingProject && (
        <>
          {!user && (
            <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900 rounded-xl mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Users size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-300">Join the Community</p>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <Link href="/sign-in" className="font-semibold hover:underline">Sign in</Link> to create projects, apply to teams, and collaborate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {user && (
            <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 border border-green-200 dark:border-green-900 rounded-xl mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                    <Check size={20} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-300">Ready to Collaborate</p>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Browse projects, apply to teams, or start your own project.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCreateForm(!showCreateForm)}
                  className="px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap flex items-center gap-2"
                >
                  {showCreateForm ? (
                    <>
                      <X size={16} />
                      Cancel
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      New Project
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            />
          </div>

          {user && (
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {showCreateForm ? (
                <>
                  <X size={18} />
                  Cancel
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Create New Project
                </>
              )}
            </button>
          )}

          {showCreateForm && user && (
            <form
              onSubmit={handleCreateProject}
              className="space-y-5 bg-card p-6 rounded-xl border border-border shadow-sm"
            >
              <div className="border-b border-border pb-4 mb-2">
                <h3 className="font-semibold text-foreground text-lg">Create a New Project</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Post your project to find talented teammates
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                  placeholder="e.g. AI-powered Recipe Generator"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
                  rows={4}
                  placeholder="Describe your project goals, what you're building, and what kind of help you need..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Skills Needed * <span className="text-muted-foreground font-normal">(comma-separated)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                    placeholder="e.g. React, Python, UI Design"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Team Size Needed *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="20"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitLoading}
                  className="flex-1 bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitLoading ? (
                    'Creating...'
                  ) : (
                    <>
                      <Plus size={18} />
                      Post Project
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {projects.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <Briefcase size={40} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-foreground font-medium text-lg mb-2">No projects yet!</p>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                {user
                  ? 'Be the first to create a project and find your dream team.'
                  : 'Sign in to create a project and start building with others.'}
              </p>
              {user && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Plus size={18} />
                  Create First Project
                </button>
              )}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => {
                const userApplication = applications.find((a) => a.project_id === project.id)
                const isCreator = user?.id === project.creator_id

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    user={user}
                    isCreator={isCreator}
                    hasApplied={!!userApplication}
                    onApplyClick={handleApplyClick}
                    onDelete={handleDeleteProject}
                    onManageClick={setManagingProject}
                  />
                )
              })}
            </div>
          )}
        </>
      )}

      {/* Application Modal */}
      {applyingToProject && (
        <ApplicationModal
          project={applyingToProject}
          onClose={() => setApplyingToProject(null)}
          onSubmit={handleSubmitApplication}
          isSubmitting={applyingLoading}
        />
      )}
    </div>
  )
}

// Project Applications Manager
function ProjectApplicationsManager({
  projectId,
  user,
  onBackClick,
}: {
  projectId: string
  user: User | null
  onBackClick: () => void
}) {
  const [project, setProject] = useState<Project | null>(null)
  const [applications, setApplications] = useState<(ProjectApplication & { profile: HackerProfile | null })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient()

        // Fetch project
        const { data: projectData, error: projectError } = await supabase
          .from('hackmate_projects')
          .select('*')
          .eq('id', projectId)
          .single()

        if (projectError) throw projectError
        setProject(projectData)

        // Fetch applications with profiles
        const { data: appsData, error: appsError } = await supabase
          .from('hackmate_project_applications')
          .select('*')
          .eq('project_id', projectId)

        if (appsError) throw appsError

        // Fetch profiles for each applicant
        const appsWithProfiles = await Promise.all(
          (appsData || []).map(async (app) => {
            const { data: profile } = await supabase
              .from('hackmate_profiles')
              .select('*')
              .eq('user_id', app.user_id)
              .single()
            return { ...app, profile }
          })
        )

        setApplications(appsWithProfiles)
      } catch (err) {
        console.error('Error loading applications:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [projectId])

  const handleAccept = async (appId: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('hackmate_project_applications')
        .update({ status: 'accepted' })
        .eq('id', appId)

      if (error) throw error

      setApplications(
        applications.map((app) =>
          app.id === appId ? { ...app, status: 'accepted' } : app
        )
      )
    } catch (err) {
      console.error('Error accepting application:', err)
    }
  }

  const handleReject = async (appId: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('hackmate_project_applications')
        .update({ status: 'rejected' })
        .eq('id', appId)

      if (error) throw error

      setApplications(
        applications.map((app) =>
          app.id === appId ? { ...app, status: 'rejected' } : app
        )
      )
    } catch (err) {
      console.error('Error rejecting application:', err)
    }
  }

  if (loading) {
    return <p className="text-muted-foreground">Loading applications...</p>
  }

  if (!project) {
    return <p className="text-muted-foreground">Project not found</p>
  }

  const pendingCount = applications.filter((a) => a.status === 'pending').length
  const acceptedCount = applications.filter((a) => a.status === 'accepted').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage applications for your project
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="px-4 py-2 bg-amber-100 dark:bg-amber-950/30 rounded-lg">
          <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
            {pendingCount} Pending
          </p>
        </div>
        <div className="px-4 py-2 bg-green-100 dark:bg-green-950/30 rounded-lg">
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            {acceptedCount} Accepted
          </p>
        </div>
        <div className="px-4 py-2 bg-secondary rounded-lg">
          <p className="text-sm font-medium text-muted-foreground">
            {applications.length} Total
          </p>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-12 bg-secondary/30 rounded-xl border border-border">
          <Users size={32} className="mx-auto text-muted-foreground mb-3" />
          <p className="text-muted-foreground font-medium">No applications yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Share your project to attract team members
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => {
            const applicantName = app.applicant_name || app.profile?.name || 'Unknown User'
            const applicantSkills = app.applicant_skills || app.profile?.skills || []
            
            return (
              <div
                key={app.id}
                className={`p-5 bg-background border rounded-xl transition-all ${
                  app.status === 'pending' 
                    ? 'border-amber-200 dark:border-amber-900' 
                    : app.status === 'accepted'
                      ? 'border-green-200 dark:border-green-900'
                      : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Applicant Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {applicantName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{applicantName}</p>
                        <p className="text-xs text-muted-foreground">
                          Applied {new Date(app.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    {applicantSkills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {applicantSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Message */}
                    {app.applicant_message && (
                      <div className="mt-3 p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          &ldquo;{app.applicant_message}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    {app.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleAccept(app.id)}
                          className="px-4 py-2 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-950/50 transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                          <Check size={16} />
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(app.id)}
                          className="px-4 py-2 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-950/50 transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                          <X size={16} />
                          Decline
                        </button>
                      </>
                    )}
                    {app.status === 'accepted' && (
                      <span className="px-4 py-2 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center gap-2">
                        <Check size={16} />
                        Accepted
                      </span>
                    )}
                    {app.status === 'rejected' && (
                      <span className="px-4 py-2 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-lg text-sm font-medium">
                        Declined
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Create/Edit Profile Tab
function CreateProfile({ user, onProfileCreated }: { user: User | null; onProfileCreated: () => void }) {
  const [profile, setProfile] = useState<HackerProfile | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    role: 'Frontend',
    skills: '',
    lookingFor: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load existing profile
  useEffect(() => {
    if (!user) return

    const fetchProfile = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('hackmate_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single()

        if (error && error.code !== 'PGRST116') throw error

        if (data) {
          setProfile(data)
          setFormData({
            name: data.name,
            role: data.role,
            skills: data.skills.join(', '),
            lookingFor: data.looking_for || '',
          })
        }
      } catch (err) {
        console.error('Error loading profile:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSubmitLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const skills = formData.skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)

      if (skills.length === 0) {
        throw new Error('Please add at least one skill')
      }

      if (profile) {
        // Update existing profile
        const { error: updateError } = await supabase
          .from('hackmate_profiles')
          .update({
            name: formData.name,
            role: formData.role,
            skills,
            looking_for: formData.lookingFor,
            updated_at: new Date().toISOString(),
          })
          .eq('user_id', user.id)

        if (updateError) throw updateError
      } else {
        // Create new profile
        const { error: insertError } = await supabase.from('hackmate_profiles').insert([
          {
            user_id: user.id,
            name: formData.name,
            role: formData.role,
            skills,
            looking_for: formData.lookingFor,
          },
        ])

        if (insertError) throw insertError
      }

      setSubmitted(true)
      onProfileCreated()
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save profile')
    } finally {
      setSubmitLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">You must be signed in to create a profile.</p>
        <Link href="/sign-in" className="text-primary hover:underline">
          Sign in now
        </Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading your profile...</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      {submitted && (
        <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg border border-primary/20">
          ✓ Profile {profile ? 'updated' : 'created'} successfully!
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 flex gap-2 items-start">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-card p-6 rounded-lg border border-border"
      >
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Role *</label>
          <select
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>ML/AI</option>
            <option>Designer</option>
            <option>Web3</option>
            <option>Mobile</option>
            <option>DevOps</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Top Skills (comma-separated) *
          </label>
          <input
            type="text"
            required
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="e.g. React, Node.js, PostgreSQL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            What are you looking for?
          </label>
          <textarea
            value={formData.lookingFor}
            onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
            rows={4}
            placeholder="Describe what you're looking for in teammates or projects..."
          />
        </div>

        <button
          type="submit"
          disabled={submitLoading}
          className="w-full bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitLoading ? 'Saving...' : profile ? 'Update Profile' : 'Create Profile'}
        </button>
      </form>
    </div>
  )
}

// Main HackMate Component
export default function HackMatePage() {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<HackerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser()
        
        if (authUser) {
          setUser({ id: authUser.id, email: authUser.email || '' })
          
          // Fetch user's profile
          const { data: profiles } = await supabase
            .from('hackmate_profiles')
            .select('*')
            .eq('user_id', authUser.id)
          
          if (profiles && profiles.length > 0) {
            setUserProfile(profiles[0])
          }
        } else {
          setUser(null)
          setUserProfile(null)
        }
      } catch (err) {
        console.error('Error getting user:', err)
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    setUserProfile(null)
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">HackMate</h1>
            <p className="text-lg text-muted-foreground">
              Connect with hackers, collaborate on projects, and build your community.
            </p>
          </div>
          {user && (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          )}
        </div>

        <Tabs defaultValue="find-hackers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="find-hackers">Find Hackers</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="find-hackers" className="space-y-4">
            <FindHackers />
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Projects user={user} userProfile={userProfile} />
          </TabsContent>
        </Tabs>
      </main>

      <SiteFooter />
    </div>
  )
}
