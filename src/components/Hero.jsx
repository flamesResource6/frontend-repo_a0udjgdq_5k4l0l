import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0a0f1c] to-[#0a0c16]" />

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 ring-1 ring-white/15 mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 animate-pulse" />
              Academic Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Sujal Tailor
            </h1>
            <p className="mt-3 text-lg text-white/80">
              B.Tech (3rd Year), Computer Science — [Institution Name Placeholder]
            </p>
            <p className="mt-6 text-xl text-white/90 max-w-xl">
              “Architecting solutions, from secure systems to intelligent data.”
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#resume" className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-sky-600 text-white font-semibold shadow-lg shadow-violet-900/20 hover:opacity-95 transition">View Resume</a>
              <a href="#projects" className="px-5 py-2 rounded-xl bg-white/10 text-white/90 hover:bg-white/20 transition">Explore Projects</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-violet-600/40 to-sky-600/40 p-[2px]">
              <div className="w-full h-full rounded-3xl bg-black/30 backdrop-blur border border-white/10 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 shadow-inner shadow-black/60 flex items-center justify-center text-white/50">
                  Photo
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-t from-violet-500/10 via-sky-500/10 to-transparent blur-3xl" />
    </section>
  )
}
