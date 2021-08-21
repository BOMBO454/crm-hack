import styled from "styled-components";
import { motion } from "framer-motion";
import Back from "../../images/Back.jpg";
import {
  GLASS_MIXIN,
  ORANGE,
  RED,
  rgba,
  WHITE,
} from "../../constants/variables";

export const EventWrapper = styled(motion.button)`
  border: 1px solid ${RED};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-image: linear-gradient(
    45deg,
    ${rgba(RED, 0.5)},
    ${rgba(RED, 0.6)}
  );
  color: white;
  border-radius: 8px;
  width: 100%;
  min-width: 100px;
  height: 40px;
`;
