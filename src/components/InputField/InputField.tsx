import React from "react";
import { InputFieldInput, InputFieldTitle, InputFieldWrapper } from "./styled";

const InputField: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <InputFieldWrapper>
      {title && <InputFieldTitle>{title}</InputFieldTitle>}
      <InputFieldInput />
    </InputFieldWrapper>
  );
};

export default InputField;
