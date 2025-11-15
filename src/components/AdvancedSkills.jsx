const Card = ({ title, children }) => (
  <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
    <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full text-white/80">
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      {children}
    </div>
  </div>
)

export default function AdvancedSkills(){
  const skills = [
    'Python & Data Structures (competitive programming)',
    'Design Patterns in Java (GUI + Observer)',
    'Applied Cryptography (RSA, Hill, Vigenere)',
    'Network Engineering (Routing, VLAN, subnetting)',
    'Database & Query Optimization',
    'Frontend Design (Tailwind + JSP)'
  ]
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {skills.map(s => (
        <Card key={s} title={s}>
          <div className="aspect-video rounded-xl bg-white/5 border border-white/10 grid place-items-center text-white/50">Artifact Placeholder</div>
        </Card>
      ))}
    </div>
  )
}
