import clsx from 'clsx';
import Link from 'next/link';
import { useUser } from '@/hooks';
import { LogoutIcon } from '@/components/icons';

export const NavBar = () => {
  const { authenticated, error } = useUser({});

  return (
    <nav className="rounded border-gray-200 bg-white bg-transparent px-4 py-2.5 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex" href="/">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            PLATA
          </span>
        </a>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="items-center block py-2 pl-3 pr-4 text-white rounded dark:text-white md:flex md:bg-transparent md:p-0">
              <Link href={'/'}>HOME</Link>
            </li>
            {authenticated && (
              <li className="items-center block py-2 pl-3 pr-4 text-white rounded dark:text-white md:flex md:bg-transparent md:p-0">
                <Link href={'/dashboard'}>DASHBOARD</Link>
              </li>
            )}
            <li>
              <div className="flex items-center w-full h-full pl-4">
                <span
                  className={clsx(
                    'h-3 w-3 rounded-full',
                    authenticated ? 'bg-green-300' : !!error ? 'bg-red-400' : 'bg-orange-200'
                  )}
                ></span>
              </div>
            </li>
            {authenticated && (
              <li>
                <a href="/api/auth/logout">
                  <LogoutIcon />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
