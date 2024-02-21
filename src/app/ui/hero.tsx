import Image from "next/image";
import Link from "next/link";
import HeaderHero from "./header/header_hero";

export default function Hero() {
  return (
    <>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/hero.jpg"
          className="rounded-lg shadow-2xl hidden md:block"
          alt="Main image for the main page of Biunatu"
          width="360"
          height="400"
        />

        <div className="glass p-4 rounded-lg shadow-2xl">
          <h1 className="text-6xl font-bold ">Biunatu App</h1>
          <p className="py-6">
            Biunatu is a haven for nature enthusiasts and adventurers alike,
            offering a platform to share captivating photos, inspiring stories,
            and thrilling trekking experiences. Whether you are passionate about
            exploring the great outdoors or simply in awe of the beauty of
            nature, AmazingNature invites you to connect with like-minded
            individuals and immerse yourself in the wonders of the natural
            world.
          </p>
          <Link href={"/login"} className="btn glass ">
            Get Started
          </Link>
        </div>
        <Image
          src="/hero_mobile.jpg"
          width="560"
          height="620"
          className="block md:hidden rounded-lg"
          alt="Image in the main page of Biunatu showing in mobile version"
        />
      </div>
    </>
  );
}
