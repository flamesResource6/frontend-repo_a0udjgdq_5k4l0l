import { useState } from 'react'
import { Dialog } from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'FAISS Quote Recommendation System',
    tags: ['Vector Embeddings','Cosine Similarity','Calendar Mapping','Tailwind','MySQL','FAISS'],
    impact: '50% search latency improvement',
    details: 'Built a vector-based recommendation system using FAISS. Implemented cosine similarity querying and calendar-mapped recommendations for temporal relevance.'
  },
  {
    title: 'Secure Data Wiping Protocols',
    tags: ['DoD 5220.22-M','Hash Verification','GDPR','Privacy'],
    impact: 'Policy-aligned data erasure with verifiable hashes',
    details: 'Designed secure data wiping strategies aligned to DoD 5220.22-M with hash-based verification and GDPR-aligned privacy considerations.'
  },
  {
    title: 'Sentiment Analysis for Telemedicine',
    tags: ['Python NLP','TF-IDF','LDA','UX Insights'],
    impact: 'Dashboard insights informing UX improvements',
    details: 'Developed NLP pipeline for telemedicine feedback using TF-IDF and topic modeling (LDA). Created a dashboard for stakeholder insights.'
  },
  { title: 'Predictive Purchase Analysis in R', tags: ['R','Forecasting'], impact: 'Improved purchase planning', details: 'Time-series modeling and predictive analytics for purchase data.' },
  { title: 'Java Design Patterns GUI', tags: ['Java','MVC','Observer'], impact: 'Educational GUI demonstrating patterns', details: 'Interactive GUI showcasing MVC & Observer patterns.' },
  { title: 'Digital Forensics of the Antikythera Mechanism', tags: ['Forensics','History','Analysis'], impact: 'Research on artifact analysis methods', details: 'Explored digital forensic techniques to analyze historical mechanisms.' }
]

const ProjectCard = ({ p, onOpen }) => (
  <motion.button whileHover={{ y: -4 }} onClick={onOpen} className="text-left rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/30 to-sky-500/30">
    <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
      <h4 className="text-white font-semibold">{p.title}</h4>
      <p className="text-sm text-white/70 mt-1">{p.impact}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {p.tags.map(t => (
          <span key={t} className="px-2 py-1 rounded-full text-[11px] bg-white/5 text-white/80 border border-white/10">{t}</span>
        ))}
      </div>
    </div>
  </motion.button>
)

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} onOpen={() => setOpenIndex(i)} />
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur" onClick={() => setOpenIndex(null)}>
          <div className="max-w-lg w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/30 to-sky-500/30">
              <div className="rounded-2xl bg-[#0b0f1a] border border-white/10 p-6">
                <h4 className="text-white text-xl font-semibold">{projects[openIndex].title}</h4>
                <p className="text-white/80 mt-3">{projects[openIndex].details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {projects[openIndex].tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-full text-[11px] bg-white/5 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
                <button onClick={() => setOpenIndex(null)} className="mt-6 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
