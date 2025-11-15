export default function Leadership(){
  const items = [
    { title: 'Led FAISS Project Team', text: 'Coordinated Git workflow, integrated backend/frontend, delivered latency reductions.' },
    { title: 'UI/UX mentor in tech club', text: 'Guided juniors on design systems, accessibility, and component libraries.' },
    { title: 'Organized DSA revision sessions', text: 'Planned structured peer-learning sessions with problem sets and solutions.' }
  ]
  return (
    <ol className="relative border-l border-white/10 ml-3 text-white/80">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ml-6">
          <span className="absolute -left-[9px] mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500"></span>
          <h4 className="text-white font-semibold">{it.title}</h4>
          <p className="mt-1">{it.text}</p>
        </li>
      ))}
    </ol>
  )
}
