export default function ProdcutsPAge() {
    const categories = [
        {
            title: "Waveguide Adapters",
            description: "Precision adapters for WR-series waveguides across mmWave frequencies."
            link: "/products/waveguide-adapters"
        },
        {
      title: "Bends & Twists",
      description: "Low-loss routing components for compact RF system integration.",
      link: "/products/bends"
    },
    {
      title: "Coax to Waveguide Transitions",
      description: "Efficient transitions between coaxial and waveguide interfaces.",
      link: "/products/transitions"
    },
    {
      title: "Couplers & Dividers",
      description: "Signal splitting and measurement components for RF test setups.",
      link: "/products/couplers"
    },
    {
      title: "Custom RF Components",
      description: "Designed-to-spec components for specialized applications.",
      link: "/custom"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <h1 className="text-4xl font-bold">RF & mmWave Components</h1>

      <p className="mt-4 max-w-2xl text-slate-300">
        MetaRadiant RF provides high-performance passive components for
        radar, satellite, and wireless systems. Explore our core product
        categories below or request a custom solution.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {categories.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-slate-300">{item.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}