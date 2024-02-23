import React from "react";
import { fetchTreksByUser, fetchTreksPagesbyUser } from "@/app/lib/data";
import { auth } from "../../../../../auth";
import Search from "@/app/ui/home/search";
import Pagination from "@/app/ui/home/pagination";
import { DeleteTrek, UpdateTrek, CreateTrek } from "@/app/ui/buttons";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth();
  //console.log(session);
  //   const totalPages = await fetchTreksPagesbyUser(query,session?.user?.id||'-');

  // const treks = await fetchTreksByUser; (session?.user?.id||'-');
  const treks = await fetchTreksByUser(query, 
    "6f8e8684-3da0-4c9e-84e3-7c124e8a4d66",
    currentPage
  );
  return (
    <div className="flex flex-col">
      <Search placeholder="Search trek..." />
      <div className=" text-center mt-1 mb-1">
        <Pagination totalPages={1} />
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Difficulty
                  </th>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Country
                  </th>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Distance
                  </th>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Image
                  </th>
                  <th scope="col" className=" sm:px-2 px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {treks?.map((trek) => (
                  <tr
                    key={trek.name}
                    className=" sm:px-2 border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                  >
                    <td className=" sm:px-2 whitespace-nowrap px-6 py-2 font-medium">
                      {trek.name}
                    </td>
                    <td className=" sm:px-2 whitespace-nowrap px-6 py-2">
                      {trek.difficunty}
                    </td>
                    <td className=" sm:px-2 whitespace-nowrap px-6 py-2">
                      {trek.country}
                    </td>
                    <td className=" sm:px-2 whitespace-nowrap px-6 py-2">
                      {trek.distance}
                    </td>
                    <td className=" sm:px-2 whitespace-nowrap px-6 py-2">
                      {trek.image_url}
                    </td>

                    <td className=" sm:px-2 whitespace-wrap px-1 py-2">
                      <div className="flex justify-end gap-3">
                        <UpdateTrek id={trek.id} />
                        <DeleteTrek id={trek.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
