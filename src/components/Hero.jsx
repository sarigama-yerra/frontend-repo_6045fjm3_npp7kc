import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          AI Legal Copilot
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Legal answers, faster. With guardrails.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
          An AI legal assistant that drafts, reviews, and explains documents with
          built-in disclaimers and enterprise controls.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#chat" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">Try the chatbot</a>
          <a href="#pricing" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition">See pricing</a>
        </div>
      </div>
    </section>
  )
}

export default Hero