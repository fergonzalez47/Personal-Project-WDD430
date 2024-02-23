import ExplorerContainer from "@/app/ui/explorers/explorer-display";
import Pagination from "@/app/ui/home/pagination";
import { fetchUsersPages } from "@/app/lib/data";
import Search from "@/app/ui/home/search";

export default async function Dashboard({
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
    <div className="bg-neutral py-24 sm:py-32">
      <h1> burda e loco </h1>
    </div>
  );
}
