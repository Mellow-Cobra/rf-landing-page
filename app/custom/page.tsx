export default function CustomPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">Custom RF Components</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          MetaRadiant RF supports custom RF and mmWave passive component
          development for radar, satellite, wireless, and test applications.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Custom Design Support</h2>
          <p className="mt-3 text-slate-300">
            We work with customers on custom waveguide hardware, transitions,
            passive structures, and prototype-focused RF component solutions.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Typical custom requests</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Custom waveguide geometries</li>
              <li>• Interface transitions</li>
              <li>• Mechanical integration constraints</li>
              <li>• Prototype and low-volume builds</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Start a request</h3>
            <p className="mt-4 text-slate-300">
              Contact MetaRadiant RF with your frequency range, interface type,
              quantity, and application details to begin a quote or technical
              discussion.
            </p>

            <a
              href="mailto:info@metaradiantrf.com"
              className="mt-6 inline-block rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Email MetaRadiant RF
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}