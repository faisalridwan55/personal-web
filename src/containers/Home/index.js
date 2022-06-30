import { Footer, SecretText } from "./components";

import { Box } from "../../components/Grid";
import { BLACK } from "../../constants/Colors";
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
            style={{fontSize: '80px'}}
            textAlign='center'
            transition={{duration: 1}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            I'm Faisal Ridwan
        </Title>
        <Box>
            <Text size="xl" color={BLACK} textAlign="center" bold>
                Currently, I'm working as an Associate Project Manager at one of 
            </Text>
            <Text size="xl" color={BLACK} textAlign="center" bold>
                company that provides IT solutions for Indonesian Millitary organization
            </Text>
            <SecretText />
            <CollapsibleRow>

            </CollapsibleRow>
        </Box>
        <Footer />
    </PageContainer>
);
 
export default Home;