import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-p-orange">
      <nav className="navbar justify-between secondary-orange">
        <Link className="btn btn-ghost bg-base-300 text-lg" href="/">
          Handcrafted Haven
        </Link>
        
      </nav>
    </header>
  );
}
