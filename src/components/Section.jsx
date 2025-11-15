import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, title, subtitle, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <section id={id} ref={ref} className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">{subtitle}</p>
          )}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
