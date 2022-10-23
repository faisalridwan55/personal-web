import { motion } from "framer-motion";

import { GREEN } from "../../constants/Colors";
import { Box, Row } from "../../components/Grid";
import { DIST_SIZE } from "../../constants/Size";
import { Text, Title } from "../../components/Text";

const data = [
  {
    date: "May 1998",
    content: "I was born as a first son of my parents at Tangerang, Indonesia",
  },
  {
    date: "2016",
    content:
      "Start my study as a freshman of Computer Sciency faculty at University of Indonesia",
  },
  {
    date: "June 2018",
    content:
      "Got my first internship experience as a SE intern at Gojek Indonesia",
  },
  {
    date: "Jan 2019",
    content: "Re-hired as a FE intern at Gojek Indonesia",
  },
  {
    date: "June 2019",
    content: "Continue my career as a FE intern at Stoqo Indonesia",
  },
  {
    date: "Dec 2019",
    content:
      "Finish my study at University of Indonesia, find for other career opportunity while waiting for my graduation",
  },
  {
    date: "Jan 2020",
    content:
      "Excited to start my first full-time position as FE at Stoqo Indonesia",
  },
  {
    date: "May 2020",
    content:
      "Stoqo exit the business because of Covid, hired as a TPM at PT. Indonesia Mandiri Networks",
  },
  {
    date: "October 2022",
    content:
      "Back to engineer life, working as Full-Stack at Slash.co, assigned by Slash.co to be part of AXA Singapore developer team :)",
  },
];

export const AboutMeTimeline = () => {
  const size = DIST_SIZE();
  const leftBoxVariants = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: { duration: 1, delay: 0.25 },
    },
  };

  const rightBoxVariants = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: { duration: 1, delay: 0.25 },
    },
  };

  const leftBoxProps = {
    flex: "1",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: `0 ${size.sm} ${size.l} 0`,
  };

  const rightBoxProps = {
    flex: "1",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: `0 0 ${size.l} ${size.sm}`,
  };

  const Divider = () => (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 0.25 },
      }}
      style={{
        borderRight: `2px solid ${GREEN}`,
        borderLeft: `2px solid ${GREEN}`,
      }}
    />
  );

  return (
    <>
      {data.map((each, index) => {
        return index % 2 === 0 ? (
          <Row justifyContent="center">
            <Box
              as={motion.div}
              variants={leftBoxVariants}
              initial="initial"
              animate="animate"
              {...leftBoxProps}
            >
              <Title style={{ fontSize: "30px" }} textAlign="right">
                {each.date}
              </Title>
            </Box>
            <Divider />
            <Box
              as={motion.div}
              variants={rightBoxVariants}
              initial="initial"
              animate="animate"
              {...rightBoxProps}
            >
              <Text>{each.content}</Text>
            </Box>
          </Row>
        ) : (
          <Row justifyContent="center">
            <Box
              as={motion.div}
              variants={leftBoxVariants}
              initial="initial"
              animate="animate"
              {...leftBoxProps}
            >
              <Text textAlign="right">{each.content}</Text>
            </Box>
            <Divider />
            <Box
              as={motion.div}
              variants={rightBoxVariants}
              initial="initial"
              animate="animate"
              {...rightBoxProps}
            >
              <Title style={{ fontSize: "30px" }}>{each.date}</Title>
            </Box>
          </Row>
        );
      })}
    </>
  );
};
