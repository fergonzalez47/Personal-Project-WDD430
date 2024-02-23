import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '../../../../auth';


export default function SideNav() {
  return (
    <div className="md:h-screen bg-neutral flex flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-1 flex items-end justify-center rounded-md bg-neutral p-4 md:h-15"
        href="/home"
      >
        <div className="btn btn-ghost text-2xl"> Biunatu</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="bg-neutral  hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-neutral p-3 text-sm font-medium btn btn-ghost">
            <PowerIcon className="w-6" />
            <div className="hidden md:block text-secondary">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
