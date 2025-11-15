export default function Future(){
  const bullets = [
    { title: 'Data Science @ Mastercard', items: ['Reinforcement learning for personalization','Automation pipelines','Experimentation systems'] },
    { title: 'Secure Systems / FinTech', items: ['Cryptographic protocols for privacy-preserving analytics','Risk scoring & fraud detection','High-availability architectures'] },
    { title: 'Open-source AI + privacy tools', items: ['Privacy-preserving embeddings','Bias evaluation toolkits','Security-first model serving'] }
  ]
  return (
    <div className="grid md:grid-cols-3 gap-5 text-white/80">
      {bullets.map(b => (
        <div key={b.title} className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
          <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
            <h4 className="text-white font-semibold">{b.title}</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {b.items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
