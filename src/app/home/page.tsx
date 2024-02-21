import { Metadata } from "next";
import SideNavHome from "../ui/home/nav-filters";
import { fetchTreksPages } from "../lib/data";
import { Suspense } from "react";
import Card from "../ui/home/card-item";
import CardItems from "../ui/home/display-home";
import Pagination from "../ui/home/pagination";

export const metadata: Metadata = {
  title: "Home | Treks",
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchTreksPages(query);

  return (
    <>
      <div
        id="personimg"
        className="mt-9 flex items-center justify-between gap-2 md:mt-8"
      >
        <SideNavHome />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<ItemsSkeleton />}> */}
      <CardItems query={query} currentPage={currentPage} />
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
