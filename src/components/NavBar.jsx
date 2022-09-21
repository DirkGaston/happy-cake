import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-red-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-red-500 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-red-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                aria-current="page"
              >
                🏠 Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className="block py-2 pr-4 pl-3 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                📔 Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center mr-10">
          <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-5">
            Happy Cake
          </span>
          <img
            src="https://i.imgur.com/nfomsNq.png"
            className="mr-3 h-6 sm:h-9 logo"
            alt="Happy Cake Logo"
            referrerPolicy="no-referrer"
          />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
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
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
