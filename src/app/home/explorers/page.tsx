import ExplorerContainer from "@/app/ui/explorers/explorer-display";
import Pagination from "@/app/ui/home/pagination";
import { fetchUsersPages } from "@/app/lib/data";
import Search from "@/app/ui/home/search";

export default async function Explorers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchUsersPages(query);


  return (
    <div className="bg-white py-24 sm:py-32">
      <Search placeholder="Search user..." />
      {/* Sekeleton here */}
      <ExplorerContainer currentPage={currentPage} query={query} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
