import Link from "next/link";
import NavLinks from "./nav-links";
import { signOut } from "next-auth/react";
export default async function Header() {
  return (
    <div className="navbar bg-primary m">
      <div className="flex-1">
        <Link href={"/home"} className="btn btn-ghost text-2xl">
          Biunatu
        </Link>
      </div>
      <div className="flex-none mr-5">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
          <li>
            <details>
              <summary className="justify-center gap-2 rounded-md px-3 text-lg font-medium  hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
                More
              </summary>
              <ul className="px-2 bg-primary rounded-t-none">
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <form
                    className=""
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button>
                      <p className="hidden md:block">Sing Out</p>
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

