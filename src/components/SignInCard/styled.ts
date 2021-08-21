import styled from "styled-components";
import { motion } from "framer-motion";

export const SignInCardContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  background: linear-gradient(45deg, #ffffffdd 0%, #ffffff11 100%);
  backdrop-filter: blur(8px);
  border: 1px solid #ffffff88;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  width: 350px;
  height: 400px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
