import styled from "styled-components";
import { ORANGE } from "../../constants/variables";

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 450px;
  width: 800px;
  svg {
    height: 100%;
    width: 100%;
    path {
      fill: ${ORANGE};
    }
  }
`;
export const SignInPageContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
