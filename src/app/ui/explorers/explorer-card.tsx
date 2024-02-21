import { Users_ } from "@/app/lib/definitions";

import Image from "next/image";
import Link from "next/link";

export default async function CardExplorer({ user }: { user: Users_ }) {
  return (
    <li key={user.fname}>
      <Link
        key={user.id}
        href={`/home/explorers/${user.id}`}
        className="group shadow-2xl pb-3 px-1 rounded"
      >
        <div className="flex items-center gap-x-6">
          <Image
            className="h-16 w-16 rounded-full"
            src={user.image_url}
            width={200}
            height={200}
            alt={user.description}
          />
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
              {user.fname} {user.lname}
            </h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">
              {user.role}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
