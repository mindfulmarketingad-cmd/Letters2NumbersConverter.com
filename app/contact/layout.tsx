import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Contact" },
  description: "Contact Letters2NumbersConverter.com. Send a message to John Reed with questions, suggestions, or bug reports.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
