import { useState } from "react";
import styled from "styled-components";
import { motion, MotionConfig } from "framer-motion";

import { DIST_SIZE } from "../constants/Size";
import { Box, Row } from "./Grid";
import ResizeablePanel from "./ResizeablePanel";
import { AnimatedComponent } from "./AnimatedComponent";

const CollapsibleContainer = styled(Box)`
  border: 1px ridge #000000;
  border-radius: 8px 8px 8px 8px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const CollapsHeader = (props: any) => (
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

export const CollapsButton = ({ isOpen, ...props }: { isOpen: boolean }) => {
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
    <AnimatedComponent>
      <motion.button
        style={{
          right: 0,
          position: "absolute",
          borderStyle: "none",
          backgroundColor: "transparent",
        }}
        initial="initial"
        animate="final"
        {...props}
      >
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
                stroke={"black"}
                fill="none"
                variants={pathVariants}
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <motion.path
                key="open-icon-2"
                fill-rule="evenodd"
                stroke={"black"}
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
                stroke={"black"}
                fill="none"
                variants={pathVariants}
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <motion.path
                key="close-icon-2"
                fill-rule="evenodd"
                stroke={"black"}
                fill="none"
                variants={pathVariants}
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </motion.svg>
          </div>
        )}
      </motion.button>
    </AnimatedComponent>
  );
};

const CollapsibleRow = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const padding = DIST_SIZE().sm;
  const animationDuration = 0.5;

  return (
    <CollapsibleContainer as={motion.div}>
      <CollapsHeader onClick={() => setIsOpen(!isOpen)} padding={padding}>
        This is collapsible header (click me!)
        <CollapsButton isOpen={isOpen} />
      </CollapsHeader>
      <MotionConfig transition={{ transition: animationDuration }}>
        <ResizeablePanel duration={animationDuration}>
          {isOpen && <div style={{ padding }}>{props.children}</div>}
        </ResizeablePanel>
      </MotionConfig>
    </CollapsibleContainer>
  );
};

export default CollapsibleRow;
