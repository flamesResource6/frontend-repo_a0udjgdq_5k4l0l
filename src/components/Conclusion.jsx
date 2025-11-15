export default function Conclusion(){
  return (
    <div className="grid md:grid-cols-2 gap-5 text-white/80">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
          <h4 className="text-white font-semibold">SWOT Analysis</h4>
          <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
            <div>
              <h5 className="text-white/90 font-medium">Strengths</h5>
              <ul className="list-disc list-inside">
                <li>Cryptography, Networking, DS depth</li>
                <li>Hands-on full-stack approach</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white/90 font-medium">Weaknesses</h5>
              <ul className="list-disc list-inside">
                <li>System architecture documentation</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white/90 font-medium">Opportunities</h5>
              <ul className="list-disc list-inside">
                <li>AI + security convergence</li>
                <li>Open-source ecosystems</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white/90 font-medium">Threats</h5>
              <ul className="list-disc list-inside">
                <li>Rapid tech evolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-sky-500/20">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-5 h-full">
          <h4 className="text-white font-semibold">Self-Assessment</h4>
          <p className="mt-2">I grow by building. Each project iterates on the last: clearer docs, stronger tests, tighter security. I value clarity in design and empathy for users, while staying grounded in rigorous systems thinking.</p>
        </div>
      </div>
    </div>
  )
}
