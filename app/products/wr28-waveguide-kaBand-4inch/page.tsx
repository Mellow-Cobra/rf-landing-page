import Image from "next/image";
import Link from "next/link";

export default function WR28WaveguidePage() {
  const productImages = [
    "/images/products/wr28-waveguide-kaBand-4inch/waveguides.jfif",
    
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src={productImages[0]}
                alt="WR-28 waveguide Ka-band 4-inch"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {productImages.slice(1).map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={src}
                    alt="WR-28 waveguide product view"
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              WR-28 Product
            </div>

            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              WR-28 Waveguide Ka-Band 4-Inch
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Precision WR-28 waveguide section for Ka-band RF and mmWave applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/datasheets/wr28-waveguide-kaBand-4inch-datasheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Datasheet
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Key Details</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Frequency band: Ka-band</li>
                <li>Waveguide standard: WR-28</li>
                <li>Length: 4 inches</li>
                <li>Application: RF, mmWave, test, and lab systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}