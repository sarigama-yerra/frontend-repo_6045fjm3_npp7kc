import React, { useEffect, useState } from 'react'

const Pricing = () => {
  const [plans, setPlans] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${backend}/api/plans`)
        const data = await res.json()
        setPlans(data.plans || [])
      } catch (e) {
        setPlans([])
      }
    }
    fetchPlans()
  }, [backend])

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple pricing</h2>
          <p className="mt-2 text-slate-300">Start free, scale as you grow.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className={`rounded-2xl border ${idx===1 ? 'border-purple-400/40' : 'border-slate-800'} bg-slate-900/60 backdrop-blur p-6 shadow`}> 
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-slate-300">{plan.description}</p>
              <div className="mt-4 text-3xl font-extrabold text-white">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-slate-200">
                {plan.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-3 rounded-xl font-semibold ${idx===1 ? 'bg-purple-500 text-white hover:bg-purple-400' : 'bg-white text-slate-900 hover:bg-slate-100'} transition`}>Get started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
