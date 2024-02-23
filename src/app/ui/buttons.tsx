import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTrek } from '../lib/data';


export function CreateTrek() {
  return (
    <Link
      href="/home/dashboard/myTreks/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">New Trek</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateTrek({ id }: { id: string }) {
  return (
    <Link
      href={`/home/dashboard/myTreks/${id}/edit`}
      className="rounded-md border hover:text-black hover:bg-secondary p-1"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTrek({ id }: { id: string }) {
  
  const deleteTrekWithId = deleteTrek.bind(null, id);
  
  return (
    <form action={deleteTrekWithId}>
      <button className="rounded-md border hover:text-black hover:bg-error p-1">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
