import Link from "next/link";


export default async function HeaderHero() {
  return (
    <header className="navbar bg-primary m">
      <div className="flex-1">
        <Link href={"/home"} className="btn btn-ghost text-2xl">
          Biunatu
        </Link>
      </div>
      <div className="flex-none mr-5">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/about"} className="btn btn-ghost text-2xl">
              About
            </Link>
          </li>
          <li>
            <Link href={"/login"} className="btn btn-ghost text-2xl">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

