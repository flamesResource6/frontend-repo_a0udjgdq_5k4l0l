export default function Ethics(){
  return (
    <div className="grid md:grid-cols-2 gap-5 text-white/80">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
          <h4 className="text-white font-semibold">Secure Data Wiping → GDPR, privacy, ethics</h4>
          <p className="mt-2">Designing data erasure protocols requires aligning with legal and ethical frameworks. Using DoD 5220.22-M patterns with hash verification ensures integrity, while minimizing over-deletion protects user rights and business continuity.</p>
        </div>
      </div>
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
          <h4 className="text-white font-semibold">Sentiment Analysis → AI fairness, bias mitigation</h4>
          <p className="mt-2">Modeling patient feedback must account for sampling bias, dialectal variance, and domain drift. I prioritize transparent feature attribution, calibration, and human oversight to avoid harm in clinical decision contexts.</p>
        </div>
      </div>
      <div className="md:col-span-2 rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
          <h4 className="text-white font-semibold">Personal reflections on responsible tech</h4>
          <p className="mt-2">Security without empathy fails users; empathy without rigor fails systems. I practice iterative, system-oriented thinking with clear documentation, reproducibility, and principled risk assessment.</p>
        </div>
      </div>
    </div>
  )
}
