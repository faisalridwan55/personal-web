import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import styledComponents from "styled-components";
import { BACKGROUND_COLOR } from "../constants/Colors";
import { DIST_SIZE, FONT_SIZE } from "../constants/Size";
import { CustomNavLink, NavButton } from "../containers/Header/components";
import { Box, Row } from "./Grid";
import MotionWrapper from "./MotionWrapper";

const sidebarInitial = { x: '-100vw' }
const sidebarTransition = { transition: { duration: 1} }
export const sidebarVariants = {
    initial: sidebarInitial,
    final: { x: 0, ...sidebarTransition },
    exit: {...sidebarInitial, ...sidebarTransition },
}

const SidebarContainer = styledComponents.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 2rem
`

const Sidebar = ({showSidebar, handleNavButtonClicked}) => {
    const color = BACKGROUND_COLOR[useLocation().pathname.replace('/', '') || 'home']
    const rowStyle = {marginBottom: DIST_SIZE.l}
    const navStyle = {fontSize: FONT_SIZE.l}
    
    return (
        <AnimatePresence>
            {showSidebar && (
                <MotionWrapper 
                    exit="exit"
                    animate="final"
                    initial="initial"
                    variants={sidebarVariants}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        zIndex: '998',
                        backgroundColor: color
                    }}
                >
                    <SidebarContainer>
                        <NavButton 
                            open={showSidebar} 
                            onClick={() => handleNavButtonClicked(!showSidebar)} 
                        />
                        <Box style={{position: 'absolute', marginTop: DIST_SIZE.xl}}>
                            <Row {...rowStyle}>
                                <CustomNavLink {...navStyle} exact to="/">Home</CustomNavLink>
                            </Row>
                            <Row {...rowStyle}>
                                <CustomNavLink {...navStyle} to="/about">About</CustomNavLink>
                            </Row>
                            <Row {...rowStyle}>
                                <CustomNavLink {...navStyle} to="/skill">Skill & Portofolio</CustomNavLink>
                            </Row>
                            <Row {...rowStyle}>
                                <CustomNavLink {...navStyle} to="/contact">Contact</CustomNavLink>
                            </Row>
                        </Box>
                    </SidebarContainer>
                </MotionWrapper>
            )}
        </AnimatePresence>
    );
}
 
export default Sidebar;