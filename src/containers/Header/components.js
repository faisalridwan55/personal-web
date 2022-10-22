import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import { Title } from "../../components/Text";
import { Box, Row } from "../../components/Grid";
import { TEXT_COLOR, WHITE } from "../../constants/Colors";
import { DIST_SIZE, FONT_SIZE } from "../../constants/Size";

export const HeaderContainer = (props) => {
  const headerContainerMargin = DIST_SIZE().xs;
  const Comp = styled(Row)`
    top: 0;
    width: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
  `;
  return <Comp margin={`${headerContainerMargin} 0px`} {...props} />;
};

export const NavTitle = ({ isDesktop }) => {
  const color = TEXT_COLOR[useLocation().pathname.replace("/", "") || "home"];
  const titleHeaderStyle = { size: "xl", textAlign: "center", color };

  return (
    <Box
      as={motion.div}
      alignItem="Center"
      width={isDesktop ? "30%" : "100%"}
      whileHover={{ y: 20 }}
    >
      <Title {...titleHeaderStyle}>Faisal</Title>
      <Title {...titleHeaderStyle}>Ridwan</Title>
    </Box>
  );
};

export const CustomNavLink = ({ children, ...props }) => {
  const defaultFontSize = FONT_SIZE().md;
  const color = TEXT_COLOR[useLocation().pathname.replace("/", "") || "home"];

  const MyNav = styled(NavLink)`
    color: ${color};
    text-decoration: none;
    font-size: ${props.fontSize || defaultFontSize};
    &:hover {
      transform: scale(1.2);
      transition: transform 1s;
    }
  `;

  return (
    <MyNav
      activeStyle={{
        color,
        fontWeight: "bold",
        textUnderlineOffset: "8px",
        textDecoration: `underline wavy ${color}`,
      }}
      {...props}
    >
      {children}
    </MyNav>
  );
};

export const NavButton = ({ open, ...props }) => {
  const style = {
    left: 15,
    top: 5,
    position: "absolute",
    borderStyle: "none",
    backgroundColor: "transparent",
  };

  const pathVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    final: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button style={style} initial="initial" animate="final" {...props}>
        {open ? (
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <motion.path
                key="close-icon"
                stroke={"white"}
                strokeWidth={2}
                fill="none"
                variants={pathVariants}
                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
              />
            </motion.svg>
          </div>
        ) : (
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <motion.path
                key="open-icon"
                fill-rule="evenodd"
                stroke={"white"}
                fill="none"
                variants={pathVariants}
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </motion.svg>
          </div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};
