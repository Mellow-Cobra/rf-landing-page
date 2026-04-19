export default function RFLandingPage() {
  const products = [
    {
      title: "Waveguide Adapters",
      description:
        "Precision adapters for standard and custom waveguide interfaces across mmWave bands.",
    },
    {
      title: "Couplers & Dividers",
      description:
        "High-frequency passive components for signal routing, measurement, and test setups.",
    },
    {
      title: "Bends, Twists & Transitions",
      description:
        "Low-loss mechanical designs for compact integration into radar, satcom, and lab systems.",
    },
    {
      title: "Custom RF Assemblies",
      description:
        "Built-to-spec passive components for research, prototyping, and commercial deployments.",
    },
  ];

  const applications = [
    "5G and 6G infrastructure",
    "Satellite communications",
    "Automotive radar",
    "Wireless test systems",
    "Defense and aerospace R&D",
    "University and commercial labs",
  ];

  const differentiators = [
    "Focused on mmWave passive components for commercial and engineering applications",
    "Support for standard and custom waveguide geometries",
    "Designs intended for performance, manufacturability, and fast iteration",
    "Technical collaboration for prototype and low-volume production needs",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <header className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                MetaRadiant LLC
              </div>
              <div className="mt-2 text-sm text-slate-400">
                mmWave & RF Passive Components
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Request a Quote
            </a>
          </header>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                Engineered for high-frequency systems
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                High-Performance RF and mmWave Components for Advanced Wireless Systems
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Precision waveguide components, passive RF hardware, and custom assemblies for
                radar, satellite, test, and next-generation communications applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Get a Quote
                </a>
                <a
                  href="#products"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  View Capabilities
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold text-white">24–110 GHz</div>
                  <div className="mt-1 text-sm text-slate-400">Target frequency coverage</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold text-white">Custom + Standard</div>
                  <div className="mt-1 text-sm text-slate-400">Commercial and prototype builds</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold text-white">Fast Iteration</div>
                  <div className="mt-1 text-sm text-slate-400">Design-to-quote collaboration</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900 p-6">
                <div className="text-sm font-medium text-cyan-300">Why teams work with us</div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <li>• Designed for technically demanding RF and mmWave environments</li>
                  <li>• Suitable for labs, commercial products, and custom integration programs</li>
                  <li>• Practical support for engineers sourcing specialized passive hardware</li>
                  <li>• Built around performance, clarity, and responsive communication</li>
                </ul>
                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Ideal for</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {applications.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Built for technical buyers
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Components for demanding RF workflows
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Whether you need a standard part or a custom build, the goal is simple: help your
              team source reliable passive RF hardware with clear technical communication and a
              fast path from inquiry to quote.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm leading-7 text-slate-200">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Core product categories
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Start with standard categories, then expand into custom offerings as your catalog and
              manufacturing network grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20" />
                <h3 className="mt-5 text-xl font-semibold text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Applications
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Where these components fit
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Position the business around industries and engineering teams that buy on technical
              fit, reliability, and responsiveness.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-base font-medium text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Technical credibility
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                A landing page that speaks to engineers
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                For RF businesses, clear positioning matters more than hype. Use this section to add
                real proof points such as frequency range, supported interfaces, prototype
                turnaround, material options, or test and inspection methods.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Example spec
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">WR-10 to WR-42</div>
                  <div className="mt-2 text-sm text-slate-400">Standard and custom interfaces</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Example fit
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">Prototype to Low Volume</div>
                  <div className="mt-2 text-sm text-slate-400">Commercial and lab-driven programs</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 sm:col-span-2">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Messaging tip
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-300">
                    Replace placeholders with numbers, interface standards, tolerances, and lead-time
                    expectations as soon as you have them. That is what will improve conversion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-10 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900 p-8 md:p-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Ready to discuss your RF component needs?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Add your email, sales inbox, or a short contact form here. The ideal CTA is simple:
              request a quote, share a requirement, or ask for a custom build.
            </p>
          </div>

          <form className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <input
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Name"
            />
            <input
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Company Email"
            />
            <input
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Frequency / Component Needed"
            />
            <textarea
              className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Project details"
            />
            <button
              type="button"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
