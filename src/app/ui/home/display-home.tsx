import Image from "next/image";
import Link from "next/link";
import { TreksFiltered } from "@/app/lib/definitions";
import Card from "./card-item";

import {
  fetchFilteredTreks,
  fetchTrekById,
  fetchTreks,
  fetchTreksByBigDistance,
  fetchTreksByCountry,
  fetchTreksByDifficulty,
  fetchTreksByLowDistance,
  fetchTreksPages,
} from "@/app/lib/data";
export default async function CardItems({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  let listOfTreks: TreksFiltered[] | undefined;

//   if (query == "highToLow") {
//     listOfTreks = await fetchProductsByPriceHight(currentPage);
//   } else if (query == "LowToHigh") {
//     listOfTreks = await fetchProductsByPriceLow(currentPage);
//   } else {
//     listOfTreks = await fetchFilteredProducts(query, currentPage);
    //   }
    
    listOfTreks = await fetchFilteredTreks(query, currentPage);

  return (
    <div className="bg-white" >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Treks
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listOfTreks.map((trek) => (
            <Card key={trek.id} trekFiltered={trek} />
          ))}
        </div>
      </div>
    </div>
  );
}
