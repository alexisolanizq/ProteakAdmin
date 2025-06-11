import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sidebarList } from "src/constants/sidebar";
import MobileLogo from "./MobileLogo";

const Sidebar = ({ collapsed, isMobile }) => {
  return (
    <aside
      className={`h-full flex flex-col ${
        collapsed && "items-center p-0"
      } bg-primary-600 transition-all duration-300`}
    >
      <Link to={"/"} className="p-4 border-b border-b-gray-800 w-full">
        {isMobile || collapsed ? (
            <MobileLogo />
        ) : (
          <img
            src="https://proteak.com/wp-content/uploads/2021/08/logo.png"
            alt="Logo"
            className="h-10 rounded object-cover"
          />
        )}
      </Link>
      <ul className={`mt-4 ${collapsed ? "p-0" : "px-4"}`}>
        {sidebarList?.map((item) =>
          item.submenu?.length > 0 && !collapsed ? (
            <div key={item.id}>
              <button className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white gap-4">
                <i className={`${item.icon} text-lg`} />
                <span className="text-sm font-semibold">{item.name}</span>
              </button>

              {item.submenu.map((subitem) => (
                <ul className="pl-7 mt-2 list-none" key={subitem.id}>
                  <li className="mb-4">
                    <Link
                      className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:bg-gray-300 before:mr-3"
                      to={`${item.link}${subitem.link}`}
                    >
                      {subitem.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ) : (
            <li key={item.id}>
              <Link
                to={item.link}
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white gap-4"
              >
                <i className={`${item.icon} text-lg`} />
                {!collapsed && (
                  <span className="text-sm font-semibold">{item.name}</span>
                )}
              </Link>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  isMobile: PropTypes.bool,
  collapsed: PropTypes.bool,
};

export default Sidebar;
