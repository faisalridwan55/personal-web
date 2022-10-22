import { motion } from "framer-motion";
import styled from "styled-components";

import { FONT_SIZE } from "../constants/Size";
import { useColor } from "../functions/useColor";

export const Title = (props) => {
  const color = useColor();

  const Element = styled(motion.p)`
    margin: 0;
    color: ${color};
    text-align: ${(props) => props.textAlign};
    font-family: "Silkscreen", cursive;
    ${(props) => `font-size: ${FONT_SIZE()[props.size || "xxxl"]};`}
  `;

  return <Element {...props} />;
};

export const Text = (props) => {
  const color = useColor();

  const Element = styled.p`
    margin: 0;
    color: ${color};
    width: ${(props) => props.width};
    text-align: ${(props) => props.textAlign};
    ${(props) => props.bold && `font-weight: bold;`}
    ${(props) => `font-size: ${FONT_SIZE()[props.size || "md"]};`}
  `;

  return <Element {...props} />;
};
