import Navbar from "./components/Navbar";

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
      
      {/* ✅ NAVBAR ADDED HERE */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.16),transparent_35%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          
          {/* 🔥 OLD HEADER REMOVED */}

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
            </div>

            {/* Right side card stays unchanged */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900 p-6">
                <div className="text-sm font-medium text-cyan-300">Why teams work with us</div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <li>• Designed for technically demanding RF and mmWave environments</li>
                  <li>• Suitable for labs, commercial products, and custom integration programs</li>
                  <li>• Practical support for engineers sourcing specialized passive hardware</li>
                  <li>• Built around performance, clarity, and responsive communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain EXACTLY the same */}
      
    </main>
  );
}