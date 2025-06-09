import { useState } from "react";

const useSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  return {
    openSidebar,
    toggleSidebar,
  };
};

export default useSidebar;
