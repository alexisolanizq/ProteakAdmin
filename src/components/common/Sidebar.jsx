import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sidebarList } from "src/constants/sidebar";

const Sidebar = ({ openSidebar }) => {
  return (
    <aside
      className={`sticky top-0 w-64 h-dvh bg-primary-600 p-4 transition-transform delay-75 ease-in-out ${
        !openSidebar && "left-0 -translate-x-[100%] hidden"
      }`}
    >
      <Link to={"/"} className="pb-2 border-b border-b-gray-800 w-full">
        <img
          src="https://proteak.com/wp-content/uploads/2021/08/logo.png"
          alt="Logo"
          className="h-10 rounded object-cover"
        />
      </Link>
      <ul className="mt-4">
        {sidebarList?.map((item) =>
          item.submenu?.length <= 0 ? (
            <li key={item.id}>
              <Link
                to={item.link}
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white"
              >
                <i className={`${item.icon} mr-3 text-lg`} />
                <span className="text-sm font-semibold">{item.name}</span>
              </Link>
            </li>
          ) : (
            <div key={item.id}>
              <button className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                <i className={`${item.icon} mr-3 text-lg`} />
                <span className="text-sm font-semibold">{item.name}</span>
              </button>
              {item?.submenu?.map((subitem) => (
                <ul className="pl-7 mt-2 list-none" key={subitem.id}>
                  <li className="mb-4">
                    <Link
                      className="text-gray-300 text-sm flex items-center hover:text-gray-100  before:bg-gray-300 before:mr-3"
                      to={`${item.link}${subitem.link}`}
                    >
                      {subitem.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          )
        )}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  openSidebar: PropTypes.bool,
};

export default Sidebar;
