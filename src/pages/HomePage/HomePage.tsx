import React from "react";
import { Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  HomePageMain,
  HomePageModulWrapper,
  SignInPageContainer,
} from "./styled";
import Orders from "./components/Orders/Orders";

const HomePage: React.FC<{ key?: string }> = ({ key }) => {
  return (
    <SignInPageContainer key={key}>
      <Sidebar />
      <HomePageMain>
        <HomePageModulWrapper
          initial={{ opacity: 0, y: "-50px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Route path="/home/orders">
            <Orders />
          </Route>
          <Route path="/home/clients">div</Route>
        </HomePageModulWrapper>
      </HomePageMain>
    </SignInPageContainer>
  );
};

export default HomePage;
