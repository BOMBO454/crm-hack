import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SignInPageContainer } from "./styled";

const HomePage: React.FC = () => {
  return (
    <SignInPageContainer>
      <Sidebar />
    </SignInPageContainer>
  );
};

export default HomePage;
