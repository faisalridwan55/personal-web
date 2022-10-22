import { AnimatePresence } from "framer-motion";
import styledComponents from "styled-components";

import { BLACK, WHITE } from "../constants/Colors";
import { DIST_SIZE, FONT_SIZE } from "../constants/Size";
import { CustomNavLink, NavButton } from "../containers/Header/components";

import { Box, Row } from "./Grid";
import MotionWrapper from "./MotionWrapper";

const sidebarVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 },
  },
};

const SidebarContainer = styledComponents.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    position: fixed;
`;

const Sidebar = ({ showSidebar, handleNavButtonClicked }) => {
  const containerMargin = DIST_SIZE().xl;
  const navStyle = { fontSize: FONT_SIZE().l };
  const rowStyle = { marginBottom: DIST_SIZE().l };

  return (
    <AnimatePresence>
      {showSidebar && (
        <MotionWrapper
          exit="exit"
          animate="final"
          initial="initial"
          variants={sidebarVariants}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "998",
            backgroundColor: WHITE,
          }}
        >
          <SidebarContainer style={{ background: BLACK }}>
            <NavButton
              open={showSidebar}
              onClick={() => handleNavButtonClicked(!showSidebar)}
            />
            <Box
              style={{ position: "absolute", marginTop: containerMargin }}
              onClick={() => handleNavButtonClicked(!showSidebar)}
            >
              <Row {...rowStyle}>
                <CustomNavLink {...navStyle} exact to="/">
                  Home
                </CustomNavLink>
              </Row>
              <Row {...rowStyle}>
                <CustomNavLink {...navStyle} to="/about">
                  About
                </CustomNavLink>
              </Row>
              <Row {...rowStyle}>
                <CustomNavLink {...navStyle} to="/skill">
                  Skill & Portofolio
                </CustomNavLink>
              </Row>
              <Row {...rowStyle}>
                <CustomNavLink {...navStyle} to="/contact">
                  Contact
                </CustomNavLink>
              </Row>
            </Box>
          </SidebarContainer>
        </MotionWrapper>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
