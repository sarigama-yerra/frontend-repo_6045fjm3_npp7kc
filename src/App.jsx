import React from 'react'
import Hero from './components/Hero'
import Chat from './components/Chat'
import Pricing from './components/Pricing'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow" />
            <span className="text-white font-semibold">Lexi.ai</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300">
            <a href="#chat" className="hover:text-white">Chat</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
          </nav>
          <a href="#chat" className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-medium">Try it</a>
        </div>
      </header>

      <main>
        <Hero />
        <Chat />
        <div id="case-studies"><CaseStudies /></div>
        <Pricing />
      </main>

      <footer className="py-10 border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Lexi.ai — Not legal advice.</div>
          <div className="text-slate-400 text-sm">Privacy • Terms • Security</div>
        </div>
      </footer>
    </div>
  )
}

export default App
