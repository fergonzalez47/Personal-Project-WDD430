import Image from "next/image";
import { Treks } from "@/app/lib/definitions";
import { format } from "date-fns";

export default async function Trek({ trek }: { trek: Treks }) {
    const trekObj = trek;
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">

      <div className="overflow-hidden rounded-lg lg:w-6/12 xl:w-5/12 mx-auto  mb-8 lg:mb-0 justify-center">
        <Image
          width={600}
          height={800}
          src={trek.image_url}
          alt={`${trek.description}'s picture`}
          className="h-auto w-full lg:max-w-full justify-center rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
        />
      </div>

      <div className="sm:ml-4 justify-center w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="mt-10 ">
          <h2 className="mb-5 text-3xl font-bold text-primary  sm:text-[40px]/[48px] ">
            {trekObj.name}
          </h2>
          <span className="block mb-4 text-xl font-semibold text-success">
            {trekObj.country}
          </span>

          <span className="block mb-4 text-xl font-semibold text-black">
            Description:
          </span>

          <p className="mb-5 text-base text-black">{trekObj.description}</p>

          <span className="block mb-4 text-xl font-semibold text-black">
            Difficulty:
          </span>
          <p className="mb-8 text-base text-black">{trek.difficunty}</p>
          <span className="block mb-4 text-xl font-semibold text-black">
            Distance:
          </span>
          <p className="mb-8 text-base text-black">{trek.distance} Km</p>
          <span className="block mb-4 text-xl font-semibold text-black">
            Created by:
          </span>
          <p className="mb-8 text-base text-black">
            {trek.fname} {trek.lname} -{" "}
            {format(new Date(trek.created_at), "dd/MM/yyyy")}
          </p>

          <p className="mb-8 text-base text-black"></p>
        </div>
      </div>
    </div>
  );
}
