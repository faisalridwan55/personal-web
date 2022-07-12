import { motion } from "framer-motion";
import styled from "styled-components";
import { WHITE } from "../constants/Colors";
import { FONT_SIZE } from "../constants/Size";

export const Title = styled(motion.p)`
    margin: 0;
    color: ${WHITE};
    font-weight: bold;
    text-align: ${props => props.textAlign};
    font-family: Zilla Slab, serif;
    ${props => `font-size: ${FONT_SIZE()[props.size || 'xxxl']};`}
`;

export const Text = styled.text`
    width: ${props => props.width};
    text-align: ${props => props.textAlign};
    color: ${props => props.color || WHITE};
    ${props => props.bold && `font-weight: bold;`}
    ${props => `font-size: ${FONT_SIZE()[props.size || 'md']};`}
`;