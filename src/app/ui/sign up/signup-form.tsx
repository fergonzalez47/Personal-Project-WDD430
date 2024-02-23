"use client";
import { useFormState, useFormStatus } from "react-dom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { createUser } from "@/app/lib/data";

export default function SignUpForm() {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-8 glass mt-4 mb-6 rounded">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral">
          Create an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={createUser} className="space-y-4">
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="fname"
                name="fname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lname"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="lname"
                name="lname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter your email"
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Confirm password:
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter password again"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Role:
            </label>
            <select
              name="role"
              id="role"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="dev">Developer</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Phone:
            </label>
            <div className="mt-2">
              <input
                placeholder="1234556789"
                id="phone"
                name="phone"
                type="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-neutral"
            >
              Description:
            </label>
            <div className="mt-2">
              <textarea
                placeholder="Enter your description"
                id="description"
                name="description"
                // type="description"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <SignUpButton />
          <p className="text-sm mt-5 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-primary-600 hover:text-secondary "
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      aria-disabled={pending}
    >
      Sign up
    </Button>
  );
}
