import { Briefcase, GraduationCap, Award, Certificate, Brain, Cpu, Database, Globe, Layers, MessageSquare, Shield, Terminal } from 'lucide-react'

const Chip = ({ children }) => (
  <span className="px-2 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">{children}</span>
)

const Card = ({ title, icon: Icon, children }) => (
  <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent">
    <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
      <div className="flex items-center gap-3 mb-3 text-white">
        <Icon size={18} className="text-violet-400" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-white/80 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </div>
)

export default function Resume() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card title="Education" icon={GraduationCap}>
        <ul className="space-y-2">
          <li><strong>B.Tech, Computer Science</strong> — [Institution Name Placeholder] (3rd Year)</li>
          <li>Focus: NLP, Cryptography, Compiler Design, Networking</li>
        </ul>
      </Card>
      <Card title="Experience" icon={Briefcase}>
        <ul className="space-y-2">
          <li>Project Lead — FAISS Quote Recommendation System</li>
          <li>UI/UX Mentor — Tech Club</li>
          <li>Organizer — DSA Revision Sessions</li>
        </ul>
      </Card>
      <Card title="Areas of Interest" icon={Brain}>
        <div className="flex flex-wrap gap-2">
          {['NLP','Cryptography','Compiler Design','Networking','Ethical AI','Full Stack'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Programming" icon={Terminal}>
        <div className="flex flex-wrap gap-2">
          {['Python','Java','C','C++'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Web & DB" icon={Database}>
        <div className="flex flex-wrap gap-2">
          {['MySQL','JSP','PHP','TailwindCSS','XML'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Data Science" icon={Cpu}>
        <div className="flex flex-wrap gap-2">
          {['Pandas','Sklearn','R','FAISS'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Concepts" icon={Layers}>
        <div className="flex flex-wrap gap-2">
          {['MVC','Design Patterns','Algorithms','VLANs','Subnetting','Parsing','RSA','Agile'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Soft Skills" icon={MessageSquare}>
        <div className="flex flex-wrap gap-2">
          {['Leadership','Public Speaking','Mentoring','Team Collaboration'].map(x => <Chip key={x}>{x}</Chip>)}
        </div>
      </Card>
      <Card title="Certifications & Awards" icon={Certificate}>
        <ul className="list-disc list-inside space-y-1">
          <li>Awards and certificates placeholder</li>
        </ul>
      </Card>
    </div>
  )
}
