export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">MetaRadiant RF</div>

      <ul className="nav-links">
        <li><a href="#products">RF Components</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#applications">Markets</a></li>
        <li><a href="#custom-builds">Custom Solutions</a></li>
        <li><a href="#specs">Technical Specs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#quote" className="nav-cta">Request a Quote</a>
    </nav>
  );
}