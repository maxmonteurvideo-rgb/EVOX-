import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          EVOX
        </a>
        <Link href="/appel" className="navbar-cta">
          Réserver un appel →
        </Link>
      </div>
    </header>
  );
}
