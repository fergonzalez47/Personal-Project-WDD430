import Image from "next/image";
import Link from "next/link";
import { fetchTrekById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Trek from "@/app/ui/home/trek-details/trek-details";
import Breadcrumbs from "@/app/ui/breadcrumbs";
export default async function ShowTreck({ params }: { params: { id: string } }) {
    const id = params.id;

    const trekFetched = await fetchTrekById(id);
    

  if (!trekFetched) {
    notFound();
  }

  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <Breadcrumbs
        breadcrumbs={[
          { label: "home", href: "/home" },
          {
            label: `${trekFetched[0].name}`,
            href: `/home/${trekFetched[0].id}`,
            active: true,
          },
        ]}
      />
      <Trek trek={trekFetched[0]} />
    </section>
  );
}
