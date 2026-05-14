import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hackathon Team Building Made Easy - HackMate',
  description: 'Find hackathon teammates, browse open teams, get AI-matched with compatible hackers, and discover upcoming hackathon events. Free to use.',
  openGraph: {
    title: 'Hackathon Team Building Made Easy - HackMate',
    description: 'Find hackathon teammates, browse open teams, get AI-matched with compatible hackers, and discover upcoming hackathon events.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/hackathon',
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/hackathon',
  },
  robots: { index: true, follow: true },
}

export default function HackathonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
