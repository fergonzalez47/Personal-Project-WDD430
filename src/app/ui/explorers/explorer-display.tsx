
import CardExplorer from "@/app/ui/explorers/explorer-card";
import { Users_ } from "@/app/lib/definitions";

import { fetchUsers } from "@/app/lib/data";



export default async function ExplorerContainer({
  currentPage,
  query,
}: {
    currentPage: number,
  query: string;
}) {
  let listOfUsers: Users_[] | undefined;



  listOfUsers = await fetchUsers(query, currentPage);
  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Amazing Explorers!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Meet each of the adventurers who are around the world
        </p>
      </div>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        {listOfUsers.map((person) => (
          <CardExplorer key={person.fname} user={person} />
        ))}
      </ul>
    </div>
  );
}

