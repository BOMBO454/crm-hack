import React from "react";
import { SidebarWrapper } from "./styled";
import ItemSidebar from "./components/ItemSidebar/ItemSidebar";

const Sidebar: React.FC = ({ children }) => {
  return (
    <SidebarWrapper>
      <ItemSidebar />
      <ItemSidebar />
      <ItemSidebar />
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
