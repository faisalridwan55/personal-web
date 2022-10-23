import { Box } from "../../components/Grid";
import { Title } from "../../components/Text";
import { AboutMeTimeline } from "./components";
import PageContainer from "../../components/PageContainer";

const About = () => {
  return (
    <PageContainer className="home-container">
      <Box>
        <Title
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.25 },
          }}
          margin
        >
          Thank you for wanna know more about me...
        </Title>
      </Box>
      <Box>
        <AboutMeTimeline />
      </Box>
    </PageContainer>
  );
};

export default About;
