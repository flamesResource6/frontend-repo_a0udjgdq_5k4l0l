import { useEffect, useState } from 'react'
import { Menu, X, FileDown, Github, Moon, Sun } from 'lucide-react'

const SECTIONS = [
  { id: 'intro', label: 'Introduction' },
  { id: 'resume', label: 'Resume / CV' },
  { id: 'projects', label: 'Projects & Research' },
  { id: 'advanced-skills', label: 'Advanced Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'ethics', label: 'Global & Ethics' },
  { id: 'future', label: 'Future' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'testimonials', label: 'Testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('intro')
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const scrollTo = id => {
    const el = document.getElementById(id)
    if (!el) return
    setOpen(false)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="fixed top-6 left-6 z-50 hidden lg:flex flex-col gap-2 p-3 rounded-2xl backdrop-blur bg-white/5 dark:bg-black/30 border border-white/10 shadow-xl">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`text-left px-4 py-2 rounded-xl transition-all hover:bg-white/10 text-sm ${
              active === s.id ? 'bg-gradient-to-r from-violet-600/30 to-sky-600/30 text-white' : 'text-zinc-300'
            }`}
          >
            {s.label}
          </button>
        ))}
        <div className="h-px bg-white/10 my-1" />
        <div className="flex items-center gap-2 px-2">
          <button
            className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors px-2 py-1"
            onClick={() => window.open('#', '_blank')}
            aria-label="Download PDF Resume"
          >
            <FileDown size={16} /> PDF Resume
          </button>
          <button
            className="ml-auto p-2 rounded-lg hover:bg-white/10 text-zinc-200"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <div className="fixed top-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur bg-white/5 dark:bg-black/30 border border-white/10 px-4 py-3">
          <div className="flex items-center gap-3 text-white/90">
            <span className="font-semibold">Sujal Tailor</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-200" onClick={() => setDark(d => !d)}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen(o => !o)} className="text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl backdrop-blur bg-white/5 dark:bg-black/30 border border-white/10 p-2">
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className={`block w-full text-left px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-white/10 ${active===s.id?'bg-white/10':''}`}>
                {s.label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <button className="flex items-center gap-2 px-3 py-2 text-zinc-200 hover:text-white" onClick={() => window.open('#','_blank')}>
              <FileDown size={16} /> PDF Resume
            </button>
          </div>
        )}
      </div>
    </>
  )
}
