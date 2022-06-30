import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Title } from "../../components/Text";
import { Row, Box } from "../../components/Grid";
import { CustomNavLink, HeaderContainer } from "./components";

const itemContainerStyle = {width: "30%"};
const titleHeaderStyle = {size:"xl", textAlign:"center"};

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768 // Tablet size
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const NavTitle = () => (
        <Box as={motion.div} alignItem="Center" {...itemContainerStyle} whileHover={{ y: 20 }}>
            <Title {...titleHeaderStyle}>Faisal</Title>
            <Title {...titleHeaderStyle}>Ridwan</Title>
        </Box>
    )

    return ( 
        <HeaderContainer>
            {width > breakPoint ? 
            <>
                <Row justifyContent="space-around" {...itemContainerStyle}>
                    <CustomNavLink exact to="/">Home</CustomNavLink>
                    <CustomNavLink to="/about">About</CustomNavLink>
                </Row>
                <NavTitle />
                <Row justifyContent="space-around" {...itemContainerStyle}>
                    <CustomNavLink to="/skill">Skill & Portofolio</CustomNavLink>
                    <CustomNavLink to="/contact">Contact</CustomNavLink>
                </Row>
            </>
            :
            <>
                <Box>
                    Icon
                </Box>
                <Box>
                    <NavTitle />
                </Box>
            </>
            }
        </HeaderContainer>
     );
}
 
export default Header;