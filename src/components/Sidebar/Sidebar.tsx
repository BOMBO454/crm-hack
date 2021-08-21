import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Cart } from "../../images/icons/shopping-cart.svg";
import { SidebarWrapper } from "./styled";
import ItemSidebar from "./components/ItemSidebar/ItemSidebar";

const Sidebar: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <SidebarWrapper
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ ease: "easeInOut" }}
    >
      <ItemSidebar
        onClick={() => {
          history.push("/home/orders");
        }}
      >
        <Cart />
      </ItemSidebar>
      <ItemSidebar
        onClick={() => {
          history.push("/home/clients");
        }}
      />
      <ItemSidebar
        onClick={() => {
          history.push("/home/orders");
        }}
      />
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
