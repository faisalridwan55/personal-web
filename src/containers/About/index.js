import { Box } from "../../components/Grid";
import { GREEN } from "../../constants/Colors";
import { Text, Title } from "../../components/Text";
import PageContainer from "../../components/PageContainer";

const About = () => {
  return (
    <PageContainer className="home-container">
      <Title>Thank you for wanna know more about me...</Title>
      <Box>
        <ul style={{ color: GREEN }}>
          <li>
            <Text>My name is M. Faisal Taufiqur Ridwan. I'm Indonesian.</Text>
          </li>
          <li>
            <Text>I was born on 1998.</Text>
          </li>
          <li>
            <Text>
              I'm bachelor of computer science at University of Indonesia,
              taking 7 semesters to complete my studies.
            </Text>
          </li>
        </ul>
      </Box>
    </PageContainer>
  );
};

export default About;
