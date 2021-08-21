import styled from "styled-components";
import { BLACK, WHITE } from "../../../../constants/variables";

export const SideBarItem = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${WHITE};
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${BLACK};
  font-weight: 300;
  border-radius: 8px;
`;
