import { Footer, SecretText } from "./components";

import { Box } from "../../components/Grid";
import { FONT_SIZE } from "../../constants/Size";
import { BLACK, RED } from "../../constants/Colors";
import { Title, Text } from "../../components/Text";
import PageContainer from "../../components/PageContainer";
import CollapsibleRow from "../../components/CollapsibleRow";

const Home = () => (
  <PageContainer
    alignItems="center"
    justifyContent="center"
    className="home-container"
  >
    <Text size="xxl">Hi!</Text>
    <Title
      style={{ fontSize: FONT_SIZE().title, zIndex: "997" }}
      textAlign="center"
      transition={{ duration: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      I'm Faisal Ridwan
    </Title>
    <Box>
      <Text size="xl" color={BLACK} textAlign="center" bold>
        Currently, I work as full-stack developer for company from Singapore.
      </Text>
      <SecretText />
      <CollapsibleRow title="This is collapsible header (click me!)">
        <ul style={{ color: RED, margin: 0, paddingLeft: "20px" }}>
          <li>
            <Text>
              {`This is a homemade website made by React Framework `}
              <a
                href="https://github.com/faisalridwan55/personal-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Repo link)
              </a>
            </Text>
          </li>
          <li>
            <Text>
              This website is still on development, update frequently when I
              have free time
            </Text>
          </li>
        </ul>
      </CollapsibleRow>
    </Box>
    <Footer />
  </PageContainer>
);

export default Home;
