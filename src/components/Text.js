import styled from "styled-components";
import { WHITE } from "../constants/Colors";
import { FONT_SIZE } from "../constants/Size";

export const Title = styled.text`
    color: ${WHITE};
    font-weight: bold;
    text-align: ${props => props.textAlign};
    font-family: Zilla Slab, serif;
    font-size: ${props => `${FONT_SIZE[props.size || 'xxxl']}`};
`;