import React from "react";
import { useHistory } from "react-router-dom";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { SignInCardContainer } from "./styled";

const SignInCard: React.FC = () => {
  const history = useHistory();
  return (
    <SignInCardContainer
      initial={{ y: "-60%", x: "-50%" }}
      animate={{ y: "-50%", x: "-50%" }}
    >
      <InputField title="логин" />
      <InputField title="пароль" type="password" />
      <Button
        onClick={() => {
          history.push("/home");
        }}
      >
        Войти
      </Button>
    </SignInCardContainer>
  );
};

export default SignInCard;
