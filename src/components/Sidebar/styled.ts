import styled from "styled-components";
import { GLASS_MIXIN } from "../../constants/variables";

export const SidebarWrapper = styled.div`
  ${GLASS_MIXIN};
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  width: 72px;
  gap: 8px;
`;
