import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import useAuth from "src/hooks/auth/useAuth";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const { onRestart } = useAuth();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="w-full z-10 sticky top-0 py-2 px-6 bg-white flex items-between shadow-md shadow-black/5">
      <div className="flex items-center w-full">
        <button onClick={toggleSidebar} className="text-lg text-gray-600">
          <i className="ri-menu-line" />
        </button>
        <ul className="flex items-center text-sm ml-4">
          <li className="mr-2">
            <Link
              to={"/panel"}
              className="text-gray-400 hover:text-gray-600 font-semibold"
            >
              Panel
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <span key={to} className="flex items-center">
                <i className="ri-arrow-right-s-line mx-2 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-500 truncate max-w-[150px]">
                    {decodeURIComponent(
                      value
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    )}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-blue-600 hover:underline truncate max-w-[150px]"
                  >
                    {decodeURIComponent(
                      value
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    )}
                  </Link>
                )}
              </span>
            );
          })}
        </ul>
      </div>
      <button onClick={onRestart} className="text-lg text-gray-600 justify-end">
        <i className="ri-logout-box-r-line" />
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default Navbar;
