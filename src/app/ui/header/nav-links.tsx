'use client'
import {
  FaceSmileIcon,
  PhotoIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//TODO /catalog/sellers
const links = [
  { name: "Treks", href: "/home", icon: PhotoIcon },
  { name: "Explorers", href: "/home/explorers", icon: UserGroupIcon },
  { name: "About", href: "/home/about", icon: FaceSmileIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                " justify-center gap-2 rounded-md p-3 text-lg font-medium  hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "neutral text-bg-100": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
}
