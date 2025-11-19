import React, { useEffect, useState } from 'react'

const CaseStudies = () => {
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch(`${backend}/api/case-studies`)
        const data = await res.json()
        setItems(data.caseStudies || [])
      } catch (e) {
        setItems([])
      }
    }
    fetchCases()
  }, [backend])

  return (
    <section className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Proven outcomes</h2>
          <p className="mt-2 text-slate-300">Real examples of how teams use the assistant to move faster with confidence.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="text-xs uppercase tracking-wider text-purple-300/80">{it.industry}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-slate-300">{it.summary}</p>
              <div className="mt-4 text-slate-200"><span className="font-semibold text-white">Impact:</span> {it.impact}</div>
              <ul className="mt-4 space-y-1 text-slate-300">
                {it.metrics?.map((m, i) => (
                  <li key={i}>• {m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
