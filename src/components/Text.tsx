import { motion } from "framer-motion";
import styled from "styled-components";
import { WHITE } from "../constants/Colors";
import { FONT_SIZE } from "../constants/Size";

type Props = { textAlign?: string; size?: string; bold?: string };

export const Title = styled(motion.p)<Props>`
  margin: 0;
  color: ${WHITE};
  font-weight: bold;
  text-align: ${(props) => props.textAlign};
  font-family: Zilla Slab, serif;
  ${(props) => `font-size: ${FONT_SIZE()[props.size || "xxxl"]};`}
`;

export const Text = styled.text<any>`
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color || WHITE};
  ${(props) => props.bold && `font-weight: bold;`}
  ${(props) => `font-size: ${FONT_SIZE()[props.size || "md"]};`}
`;
