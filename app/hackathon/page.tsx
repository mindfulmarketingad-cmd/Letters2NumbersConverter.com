'use client'

import { useState } from 'react'
import { Mail, Linkedin } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

// Types
interface HackerProfile {
  id: string
  name: string
  role: string
  skills: string[]
  contact: string
  avatar: string
}

interface Team {
  id: string
  name: string
  description: string
  skills: string[]
  status: 'open' | 'full'
  contactEmail: string
}

interface ProfileSubmission {
  name: string
  role: string
  contact: string
  skills: string[]
  lookingFor: string
}

// Sample data
const SAMPLE_HACKERS: HackerProfile[] = [
  {
    id: '1',
    name: 'Alice Chen',
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'Tailwind'],
    contact: 'alice@email.com',
    avatar: 'AC',
  },
  {
    id: '2',
    name: 'Bob Martinez',
    role: 'Backend Engineer',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs'],
    contact: 'bob@email.com',
    avatar: 'BM',
  },
  {
    id: '3',
    name: 'Carol Wei',
    role: 'ML Engineer',
    skills: ['Python', 'TensorFlow', 'Computer Vision'],
    contact: 'carol@email.com',
    avatar: 'CW',
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Designer',
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    contact: 'david@email.com',
    avatar: 'DP',
  },
  {
    id: '5',
    name: 'Eva Thompson',
    role: 'Web3 Developer',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts'],
    contact: 'eva@email.com',
    avatar: 'ET',
  },
  {
    id: '6',
    name: 'Frank Kumar',
    role: 'Mobile Developer',
    skills: ['React Native', 'iOS', 'Firebase'],
    contact: 'frank@email.com',
    avatar: 'FK',
  },
]

const SAMPLE_TEAMS: Team[] = [
  {
    id: '1',
    name: 'FinTech Innovators',
    description: 'Building a decentralized payment platform. Looking for backend & ML engineers.',
    skills: ['Web3', 'Python', 'Node.js'],
    status: 'open',
    contactEmail: 'fintech@team.com',
  },
  {
    id: '2',
    name: 'AI Content Creators',
    description: 'AI-powered content generation tool. Need frontend developers and designers.',
    skills: ['React', 'ML', 'API Design'],
    status: 'open',
    contactEmail: 'ai@team.com',
  },
  {
    id: '3',
    name: 'Mobile Health App',
    description: 'Healthcare tracking app. Team is currently full.',
    skills: ['React Native', 'Health Tech', 'Design'],
    status: 'full',
    contactEmail: 'health@team.com',
  },
]

// Hacker Card
function HackerCard({ hacker }: { hacker: HackerProfile }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
          {hacker.avatar}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{hacker.name}</h3>
          <p className="text-sm text-gray-600">{hacker.role}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {hacker.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <a
        href={`mailto:${hacker.contact}`}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
      >
        <Mail size={16} />
        Connect
      </a>
    </div>
  )
}

// Team Card
function TeamCard({ team }: { team: Team }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{team.name}</h3>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            team.status === 'open'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {team.status === 'open' ? 'Open' : 'Full'}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{team.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {team.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        disabled={team.status === 'full'}
        className={`w-full font-medium py-2 rounded-lg transition-colors text-sm ${
          team.status === 'open'
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {team.status === 'open' ? 'Apply' : 'Team Full'}
      </button>
    </div>
  )
}

// Find Hackers Tab
function FindHackers() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredHackers = SAMPLE_HACKERS.filter((hacker) => {
    const query = searchQuery.toLowerCase()
    return (
      hacker.name.toLowerCase().includes(query) ||
      hacker.role.toLowerCase().includes(query) ||
      hacker.skills.some((skill) => skill.toLowerCase().includes(query))
    )
  })

  return (
    <div className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Search by name, role, or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredHackers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No hackers found matching your search.</p>
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

// Open Teams Tab
function OpenTeams() {
  return (
    <div className="space-y-4">
      {SAMPLE_TEAMS.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store in state (no backend)
    console.log('Profile submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        role: 'Frontend',
        contact: '',
        skills: '',
        lookingFor: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="max-w-2xl">
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
          ✓ Profile created successfully! You can now connect with other hackers.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg border border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Role *
          </label>
          <select
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>ML/AI</option>
            <option>Designer</option>
            <option>Web3</option>
            <option>Mobile</option>
            <option>DevOps</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Contact (Email or LinkedIn) *
          </label>
          <input
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com or linkedin.com/in/yourprofile"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Top Skills (comma-separated) *
          </label>
          <input
            type="text"
            required
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. React, Node.js, PostgreSQL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            What are you looking for?
          </label>
          <textarea
            value={formData.lookingFor}
            onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
            placeholder="Describe what you're looking for in teammates or projects..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Profile
        </button>
      </form>
    </div>
  )
}

// Main HackMate Component
export default function HackMatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">HackMate</h1>
          <p className="text-lg text-gray-600">Find teammates, discover teams, and build something amazing.</p>
        </div>

        <Tabs defaultValue="find-hackers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="find-hackers">Find Hackers</TabsTrigger>
            <TabsTrigger value="open-teams">Open Teams</TabsTrigger>
            <TabsTrigger value="create-profile">Create Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="find-hackers" className="space-y-4">
            <FindHackers />
          </TabsContent>

          <TabsContent value="open-teams" className="space-y-4">
            <OpenTeams />
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
