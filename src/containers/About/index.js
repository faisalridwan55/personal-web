import { BACKGROUND_COLOR } from "../../constants/Colors";
import PageContainer from "../../components/PageContainer";
import { Title } from "../../components/Text";

const About = () => {
    return ( 
        <PageContainer className="home-container" backgroundColor={BACKGROUND_COLOR.about}>
            <Title>This is about page</Title>
        </PageContainer>
     );
}
 
export default About;