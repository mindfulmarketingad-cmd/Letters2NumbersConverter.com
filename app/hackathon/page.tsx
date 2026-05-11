'use client'

import { useState, useEffect } from 'react'
import { Mail, Linkedin, AlertCircle } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { createClient } from '@/lib/supabase/client'

// Types
interface HackerProfile {
  id: string
  name: string
  role: string
  skills: string[]
  contact: string
  looking_for: string
  created_at: string
}

interface ProfileSubmission {
  name: string
  role: string
  contact: string
  skills: string[]
  lookingFor: string
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

      <a
        href={`mailto:${hacker.contact}`}
        className="w-full bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
      >
        <Mail size={16} />
        Connect
      </a>
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
            Be the first to create a profile in the Create Profile tab.
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

// Create Profile Tab
function CreateProfile() {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Frontend',
    contact: '',
    skills: '',
    lookingFor: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
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

      const { error: insertError } = await supabase.from('hackmate_profiles').insert([
        {
          name: formData.name,
          role: formData.role,
          contact: formData.contact,
          skills,
          looking_for: formData.lookingFor,
        },
      ])

      if (insertError) throw insertError

      setSubmitted(true)
      setFormData({
        name: '',
        role: 'Frontend',
        contact: '',
        skills: '',
        lookingFor: '',
      })

      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create profile')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      {submitted && (
        <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg border border-primary/20">
          ✓ Profile created successfully! You can now connect with other hackers.
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
            Contact (Email or LinkedIn) *
          </label>
          <input
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="your@email.com or linkedin.com/in/yourprofile"
          />
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
          disabled={loading}
          className="w-full bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Profile...' : 'Create Profile'}
        </button>
      </form>
    </div>
  )
}

// Main HackMate Component
export default function HackMatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">HackMate</h1>
          <p className="text-lg text-muted-foreground">
            Create your profile, find teammates, and build something amazing together.
          </p>
        </div>

        <Tabs defaultValue="find-hackers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="find-hackers">Find Hackers</TabsTrigger>
            <TabsTrigger value="create-profile">Create Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="find-hackers" className="space-y-4">
            <FindHackers />
          </TabsContent>

          <TabsContent value="create-profile" className="space-y-4">
            <CreateProfile />
          </TabsContent>
        </Tabs>
      </main>

      <SiteFooter />
    </div>
  )
}
