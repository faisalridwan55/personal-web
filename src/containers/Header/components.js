import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FONT_SIZE } from "../../constants/Size";
import { HContainer } from "../../components/Grid";
import { GREEN, RED } from "../../constants/Colors";


export const HeaderContainer = styled(HContainer)`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ItemContainer = (props) => <HContainer width="33.3%" {...props}/>

export const CustomNavLink = ({children, ...props}) => {
    const MyNav = styled(NavLink)`
        text-decoration: none;
        color: ${GREEN};
        font-size: ${FONT_SIZE.md};
        &:hover {
            color: ${RED};
        };
    `;

    return (
        <MyNav 
            activeStyle={{color: RED, fontWeight: "bold", textDecoration: `underline wavy ${RED}`, textUnderlineOffset: "8px"}}
            {...props}
        >
            {children}
        </MyNav>
    )
}
    