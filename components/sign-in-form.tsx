'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { Mail, Lock, LogIn } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  
  // Hackathon profile fields
  const [name, setName] = useState('')
  const [role, setRole] = useState('Frontend')
  const [skills, setSkills] = useState('')
  const [lookingFor, setLookingFor] = useState('')
  
  const router = useRouter()
  const searchParams = useSearchParams()

  // Check if signup mode from URL parameter
  useEffect(() => {
    if (searchParams.get('mode') === 'signup') {
      setIsSignUp(true)
    }
  }, [searchParams])

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message)
        return
      }

      router.push('/dashboard')
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Sign up user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        return
      }

      // If user is created, create hackmate profile
      if (authData.user) {
        const skillsArray = skills
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)

        const { error: profileError } = await supabase
          .from('hackmate_profiles')
          .insert([
            {
              user_id: authData.user.id,
              name,
              role,
              skills: skillsArray,
              looking_for: lookingFor,
            },
          ])

        if (profileError) {
          console.error('Profile creation error:', profileError)
          // Don't fail signup if profile creation fails
        }
      }

      setError('')
      alert('Check your email for the confirmation link!')
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <p className="text-sm text-muted-foreground">
            {isSignUp ? 'Join HackMate and find your team' : 'Create an account to get started'}
          </p>
        </div>

        <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4 max-h-96 overflow-y-auto">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>
          </div>

          {isSignUp && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Role
                </label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Top Skills (comma-separated)
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={e => setSkills(e.target.value)}
                  placeholder="e.g. React, Node.js, PostgreSQL"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Looking For (optional)
                </label>
                <textarea
                  value={lookingFor}
                  onChange={e => setLookingFor(e.target.value)}
                  placeholder="What are you looking for in teammates or projects?"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  rows={2}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">or</span>
          </div>
        </div>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          disabled={loading}
          className="w-full py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium"
        >
          {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
        </button>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            By signing in, you agree to our{' '}
            <a href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
