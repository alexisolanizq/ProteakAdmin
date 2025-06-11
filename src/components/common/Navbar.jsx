import PropTypes from "prop-types";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="w-full z-10 sticky top-0 py-2 px-6 bg-white flex items-center shadow-md shadow-black/5">
      <button onClick={toggleSidebar} className="text-lg text-gray-600">
        <i className="ri-menu-line" />
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <button className="text-gray-400 hover:text-gray-600 font-semibold">
            Inicio
          </button>
        </li>
        <li className="mr-2 text-gray-600 font-semibold">/</li>
        {/* <li className="mr-2 text-gray-600 font-semibold">Tarjetas</li> */}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default Navbar;
