import { TreksFiltered } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default async function Card({
  trekFiltered,
}: {
  trekFiltered: TreksFiltered;
}) {
  return (
    <Link
      key={trekFiltered.id}
      href={`/home/${trekFiltered.id}`}
      className="group shadow-2xl pb-3 px-1 rounded"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src="/no_image.jpg"
          alt={trekFiltered.description}
          width={600}
          height={800}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        {trekFiltered.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-700">
        {trekFiltered.country}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-900">
        {trekFiltered.difficunty}
      </p>

      <p className="mt-1 text-sm text-gray-700 ">{trekFiltered.distance} km</p>
      <p className="text-sm text-secondary">
        {trekFiltered.fname} {trekFiltered.lname}
      </p>
    </Link>

    // <article
    //   key={trekFiltered.id}
    //   className="flex max-w-xl flex-col items-start justify-between"
    // >
    //   <div className="flex items-center gap-x-4 text-xs">
    //     <time dateTime={trekFiltered.name} className="text-gray-500">
    //       {trekFiltered.image_url}
    //     </time>
    //     <a
    //       href={trekFiltered.difficunty}
    //       className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    //     >
    //       {trekFiltered.distance}
    //     </a>
    //   </div>
    //   <div className="group relative">
    //     <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
    //       <a href="">
    //         <span className="absolute inset-0" />
    //         {trekFiltered.distance}
    //       </a>
    //     </h3>
    //     <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
    //       {trekFiltered.description}
    //     </p>
    //   </div>
    //   <div className="relative mt-8 flex items-center gap-x-4">
    //     <img
    //       src={trekFiltered.name}
    //       alt=""
    //       className="h-10 w-10 rounded-full bg-gray-50"
    //     />
    //     <div className="text-sm leading-6">
    //       <p className="font-semibold text-gray-900">
    //         <a href="{trekFiltered.name">
    //           <span className="absolute inset-0" />
    //           {trekFiltered.name}
    //         </a>
    //       </p>
    //       <p className="text-gray-600">{trekFiltered.id}</p>
    //     </div>
    //   </div>
    // </article>
  );
}
