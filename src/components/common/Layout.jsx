import { Outlet } from "react-router-dom";
import useSidebar from "src/hooks/common/useSidebar";
import Sidebar from "src/components/common/Sidebar";
import Navbar from "src/components/common/Navbar";

const Layout = () => {
  const { toggleSidebar, openSidebar } = useSidebar();

  return (
    <div className="flex relative">
      <Sidebar openSidebar={openSidebar} />
      <div className="flex-1 bg-[#F3F6FE] min-h-dvh relative overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="mt-12">
          <Outlet />
        </div>
        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
