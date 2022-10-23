import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { Text } from "./Text";
import { Box, Row } from "./Grid";

import { DIST_SIZE } from "../constants/Size";
import { useColor } from "../functions/useColor";
import IsDesktop from "../functions/isDesktop";

export const CollapsibleContainer = (props) => {
  const color = useColor();

  const Element = styled(Box)`
    border: 1px ridge ${color};
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(0, 0, 0, 0.1);
  `;
  return <Element {...props} />;
};

const CollapsHeader = (props) => (
  <Row
    justifyContent="center"
    style={{
      cursor: "pointer",
      position: "relative",
      alignItems: "center",
    }}
    {...props}
  />
);

export const CollapsButton = ({ isOpen, ...props }) => {
  const color = useColor();

  const style = {
    right: "10px",
    top: IsDesktop() ? "19px" : "7px",
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
        {!isOpen ? (
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <motion.path
                key="open-icon-1"
                fill-rule="evenodd"
                stroke={color}
                fill="none"
                variants={pathVariants}
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <motion.path
                key="open-icon-2"
                fill-rule="evenodd"
                stroke={color}
                fill="none"
                variants={pathVariants}
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </motion.svg>
          </div>
        ) : (
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <motion.path
                key="close-icon-1"
                fill-rule="evenodd"
                stroke={color}
                fill="none"
                variants={pathVariants}
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <motion.path
                key="close-icon-2"
                fill-rule="evenodd"
                stroke={color}
                fill="none"
                variants={pathVariants}
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </motion.svg>
          </div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};

const CollapsibleRow = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const padding = DIST_SIZE().sm;

  return (
    <CollapsibleContainer as={motion.div}>
      <CollapsHeader onClick={() => setIsOpen(!isOpen)} padding={padding}>
        <Text>{props.title}</Text>
        <CollapsButton isOpen={isOpen} />
      </CollapsHeader>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.5, delay: 0.2 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.5, delay: 0.2 },
                opacity: { duration: 0.2 },
              },
            }}
          >
            <div style={{ padding }}>{props.children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </CollapsibleContainer>
  );
};

export default CollapsibleRow;
