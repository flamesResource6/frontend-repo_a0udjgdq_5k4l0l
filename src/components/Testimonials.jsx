export default function Testimonials(){
  const items = [
    { name: 'Professor Placeholder', text: 'Sujal demonstrates rare breadth across systems, security, and ML — paired with design empathy.' },
    { name: 'Mentor Placeholder', text: 'A collaborative leader who ships. Clear communication, principled engineering.' }
  ]
  return (
    <div className="grid md:grid-cols-2 gap-5 text-white/80">
      {items.map(t => (
        <div key={t.name} className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
            <p className="italic">“{t.text}”</p>
            <p className="mt-2 text-white/60">— {t.name}</p>
          </div>
        </div>
      ))}
      <div className="md:col-span-2 rounded-2xl bg-white/5 border border-dashed border-white/10 p-5 text-center text-white/60">Add more recommendations here</div>
    </div>
  )
}
