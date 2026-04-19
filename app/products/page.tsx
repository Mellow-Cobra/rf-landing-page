export default function ProductsPage() {
  const categories = [
    {
      title: "Waveguide Adapters",
      description:
        "Precision adapters for WR-series waveguides across mmWave frequency bands.",
      link: "/products/waveguide-adapters",
    },
    {
      title: "Bends & Twists",
      description:
        "Low-loss routing components for compact integration into RF systems.",
      link: "/products",
    },
    {
      title: "Coax to Waveguide Transitions",
      description:
        "Efficient transitions between coaxial and waveguide interfaces.",
      link: "/products",
    },
    {
      title: "Couplers & Dividers",
      description:
        "Signal splitting and passive measurement hardware for test environments.",
      link: "/products",
    },
    {
      title: "Custom RF Components",
      description:
        "Designed-to-spec passive components for specialized applications.",
      link: "/custom",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">RF & mmWave Components</h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          MetaRadiant RF provides high-performance passive RF and mmWave
          components for radar, satellite, and wireless systems. Explore core
          product categories below or request a custom solution.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}