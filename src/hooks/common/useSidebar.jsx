import { useEffect, useState } from "react";
import { getStorage } from "src/utils/storage";

const useSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setSidebarOpen(!sidebarOpen)
  };

  const toggleRightSidebar = () => {
    setRightSidebar(!rightSidebar)
  }

  useEffect(() => {
    const savedCollapsed = getStorage("sidebar-collapsed");
    if (savedCollapsed !== null) {
      setCollapsed(savedCollapsed === "true");
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("sidebar-collapsed", collapsed.toString());
    }
  }, [collapsed, isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setCollapsed(true);
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return {
    isMobile,
    collapsed,
    sidebarOpen,
    rightSidebar,
    toggleSidebar,
    toggleRightSidebar
  };
};

export default useSidebar;
