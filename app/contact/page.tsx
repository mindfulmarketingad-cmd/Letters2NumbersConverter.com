"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link
    const subject = encodeURIComponent("Contact from Letter2Num")
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\n\nMessage:\n${formData.message}`
    )
    
    window.location.href = `mailto:mindfulmarketingad@gmail.com?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A1</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              Letter2Num
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
          </p>

          <Button onClick={() => setIsOpen(true)} size="lg">
            Open Contact Form
          </Button>
        </div>
      </section>

      {/* Contact Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-6 text-center">
              <p className="text-foreground mb-4">
                Your email client should have opened with your message. If it didn&apos;t, please email us directly at mindfulmarketingad@gmail.com
              </p>
              <Button onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: "", email: "", message: "" })
              }}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-muted-foreground text-sm">(optional)</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-muted-foreground text-sm">(optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Opening email..." : "Send Message"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
            <p className="text-muted-foreground text-sm">
              &copy; 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
