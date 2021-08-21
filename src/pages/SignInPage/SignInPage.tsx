import React from "react";
import SignInCard from "../../components/SignInCard/SignInCard";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { SignInPageContainer, LogoWrapper } from "./styled";

const SignInPage: React.FC = () => {
  return (
    <SignInPageContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SignInCard />
    </SignInPageContainer>
  );
};

export default SignInPage;
