import React from "react";
import InputField from "../InputField/InputField";
import { SignInCardContainer } from "./styled";

const SignInCard: React.FC = () => {
  return (
    <SignInCardContainer
      initial={{ y: "-60%", x: "-50%" }}
      animate={{ y: "-50%", x: "-50%" }}
    >
      <InputField title="логин" />
    </SignInCardContainer>
  );
};

export default SignInCard;
