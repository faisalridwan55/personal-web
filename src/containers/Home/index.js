import { Footer, SecretText } from "./components";

import { Box } from "../../components/Grid";
import { BLACK } from "../../constants/Colors";
import { Title, Text } from "../../components/Text";
import PageContainer from "../../components/PageContainer";
import CollapsibleRow from "../../components/CollapsibleRow";
import { FONT_SIZE } from "../../constants/Size";

const Home = () => ( 
    <PageContainer 
        alignItems="center"
        justifyContent="center"
        className="home-container"
    >
        <Text size="xxl">Hi!</Text>
        <Title 
            style={{fontSize: FONT_SIZE().title, zIndex:'997'}}
            textAlign='center'
            transition={{duration: 1}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            I'm Faisal Ridwan
        </Title>
        <Box>
            <Text size="xl" color={BLACK} textAlign="center" bold>
                Currently, I responsible to manage the technical aspect of the project 
            </Text>
            <Text size="xl" color={BLACK} textAlign="center" bold>
                at the company that provides IT solutions for Indonesian Millitary organization
            </Text>
            <SecretText />
            <CollapsibleRow>

            </CollapsibleRow>
        </Box>
        <Footer />
    </PageContainer>
);
 
export default Home;