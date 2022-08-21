import Link from "next/link";

const Header = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600">
      <div className="container flex flex-wrap  justify-center md:justify-between items-center mx-auto ">
        <div className="text-xs font-light text-gray-300">
          Contact : +2126707070 / contact@mi7fadti.com
        </div>
        <div className="md:flex hidden">
          <Link href="#commande">
            <a className="text-white animate-pulse bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Passer un commande
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
