import { Outlet } from "react-router-dom";
import Navbar from "src/components/common/Navbar";
import Sidebar from "src/components/common/Sidebar";
import useSidebar from "src/hooks/common/useSidebar";

const Layout = () => {
  const { toggleSidebar, sidebarOpen, collapsed, isMobile } = useSidebar();
  const sidebarWidth = collapsed ? "w-16" : "w-64";

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`hidden md:flex ${sidebarWidth} transition-all duration-300 bg-gray-800 text-white`}
      >
        <Sidebar isMobile={isMobile} collapsed={collapsed} />
      </div>

      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-gray-800 text-white">
            <Sidebar collapsed={false} />
          </div>
          <button
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => toggleSidebar()}
          />
        </div>
      )}

      <div className="flex-1 bg-[#F3F6FE] min-h-dvh relative overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
