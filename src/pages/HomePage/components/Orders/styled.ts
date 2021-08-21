import styled from "styled-components";
import { motion } from "framer-motion";
import { BLACK_LIGHT, WHITE } from "../../../../constants/variables";

export const HeaderBar = styled(motion.ul)`
  border-bottom: 1px solid ${WHITE};
  height: 60px;
  padding: 32px 32px;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  li {
    list-style: none;
    color: ${BLACK_LIGHT};
    font-weight: bold;
  }
`;
