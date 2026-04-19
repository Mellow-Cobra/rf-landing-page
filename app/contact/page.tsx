export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">Contact MetaRadiant RF</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Reach out for quotes, product questions, or custom RF and mmWave
          component requests. Share your frequency range, interface type,
          quantity, and application details so we can respond more effectively.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Send an Inquiry</h2>

            <form className="mt-6 grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Frequency / Component Needed
                </label>
                <input
                  type="text"
                  placeholder="Example: WR-10 adapter, 75–110 GHz"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Project Details
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your application, interface requirements, quantity, and timeline."
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="mt-4 text-slate-300">
                For direct inquiries, you can also reach out by email.
              </p>

              <div className="mt-5">
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  Email
                </div>
                <a
                  href="mailto:info@metaradiantrf.com"
                  className="mt-2 inline-block text-cyan-300 hover:text-cyan-200"
                >
                  info@metaradiantrf.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Best information to send</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Frequency range</li>
                <li>• Waveguide or interface standard</li>
                <li>• Quantity or build volume</li>
                <li>• Application or system use case</li>
                <li>• Timeline and prototype needs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Custom RF support</h3>
              <p className="mt-4 text-slate-300">
                MetaRadiant RF supports custom passive RF and mmWave component
                requests for radar, satellite, wireless, and test applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}