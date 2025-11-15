import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Resume from './components/Resume'
import Projects from './components/Projects'
import AdvancedSkills from './components/AdvancedSkills'
import Leadership from './components/Leadership'
import Ethics from './components/Ethics'
import Future from './components/Future'
import Conclusion from './components/Conclusion'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-white relative">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(88,28,135,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.12)_0%,transparent_45%)]" />

      <Navbar />
      <Hero />

      <main className="relative z-10">
        <Section id="intro" title="Introduction & Learning Philosophy" subtitle="Narrative">
          <div className="prose prose-invert max-w-none text-white/80">
            <p>
              I learn by building. From systems to interfaces, I break problems into secure, testable units and iterate until the design is simple, robust, and elegant. My curiosity spans the stack: system design and networking, cryptography and security, data and AI.
            </p>
            <p>
              I’m fascinated by compilers, protocols, and the math behind cryptosystems. My philosophy: empathy + security + clarity. Every artifact should be understandable, auditable, and usable. I practice iterative, system-oriented thinking—combining technical depth with design thinking to craft solutions that scale.
            </p>
          </div>
        </Section>

        <Section id="resume" title="Resume / CV" subtitle="Experience overview">
          <Resume />
        </Section>

        <Section id="projects" title="Interdisciplinary Projects & Research" subtitle="Showcase">
          <Projects />
        </Section>

        <Section id="advanced-skills" title="Advanced Skill Development & Mastery" subtitle="Focus Areas">
          <AdvancedSkills />
        </Section>

        <Section id="leadership" title="Collaborative & Leadership Experiences" subtitle="Impact">
          <Leadership />
        </Section>

        <Section id="ethics" title="Global Awareness & Ethical Considerations" subtitle="Case Studies">
          <Ethics />
        </Section>

        <Section id="future" title="Future Aspirations" subtitle="Direction">
          <Future />
        </Section>

        <Section id="conclusion" title="Conclusion & Self-Assessment" subtitle="Reflection">
          <Conclusion />
        </Section>

        <Section id="testimonials" title="Testimonials" subtitle="Recommendations">
          <Testimonials />
        </Section>
      </main>

      <footer className="relative z-10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Sujal Tailor — Built with a modern, minimal aesthetic
      </footer>
    </div>
  )
}

export default App
