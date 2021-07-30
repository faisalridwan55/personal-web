import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Row } from "../../components/Grid";
import { BLACK, WHITE } from "../../constants/Colors";
import { DIST_SIZE, FONT_SIZE } from "../../constants/Size";


export const HeaderContainer = styled(Row)`
    top: 0;
    width: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    margin: ${DIST_SIZE.xs} 0;
`

export const CustomNavLink = ({children, ...props}) => {
    const MyNav = styled(NavLink)`
        color: ${WHITE};
        text-decoration: none;
        font-size: ${FONT_SIZE.md};
        &:hover {
            color: ${BLACK};
            opacity: 0.8;
        };
    `;

    return (
        <MyNav 
            activeStyle={{color: BLACK, fontWeight: "bold", textDecoration: `underline wavy ${BLACK}`, textUnderlineOffset: "8px"}}
            {...props}
        >
            {children}
        </MyNav>
    )
}
    