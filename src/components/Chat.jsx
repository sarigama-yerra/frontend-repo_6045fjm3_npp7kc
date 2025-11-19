import React, { useState } from 'react'

const Chat = () => {
  const [conversationId, setConversationId] = useState(null)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'I am not a lawyer. I can provide general information, not legal advice.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const send = async (e) => {
    e?.preventDefault()
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${backend}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversation_id: conversationId, message: userMsg.content })
      })
      const data = await res.json()
      setConversationId(data.conversation_id)
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'There was a problem reaching the server.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="relative py-16 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Try the chatbot</h2>
        <p className="mt-2 text-slate-300">Ask a general legal question. Remember: this is not legal advice.</p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-6">
          <div className="space-y-4 h-[360px] overflow-y-auto pr-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-white text-slate-900' : 'bg-slate-800/80 text-slate-100'} px-4 py-2 rounded-2xl max-w-[80%] shadow`}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="text-slate-400 text-sm">Thinking…</div>
            )}
          </div>

          <form onSubmit={send} className="mt-4 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., What should a basic NDA include?"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold disabled:opacity-50"
              disabled={loading}
            >Send</button>
          </form>

          <p className="mt-3 text-xs text-slate-400">Disclaimer: This chatbot provides general information and is not a substitute for legal advice.</p>
        </div>
      </div>
    </section>
  )
}

export default Chat
