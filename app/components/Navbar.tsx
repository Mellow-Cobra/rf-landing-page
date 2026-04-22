import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white transition hover:text-cyan-300"
        >
          MetaRadiant RF
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-sm text-slate-300 transition hover:text-cyan-300">
            RF Components
          </Link>
          <Link href="/custom" className="text-sm text-slate-300 transition hover:text-cyan-300">
            Custom Solutions
          </Link>
          <Link href="/about" className="text-sm text-slate-300 transition hover:text-cyan-300">
            About
          </Link>
          <Link href="/contact" className="text-sm text-slate-300 transition hover:text-cyan-300">
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
        >
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}