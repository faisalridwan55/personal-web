import { BACKGROUND_COLOR } from "../../constants/Colors";
import PageContainer from "../../components/PageContainer";
import { Title } from "../../components/Text";

const Contact = () => {
    return ( 
        <PageContainer className="home-container" backgroundColor={BACKGROUND_COLOR.contact}>
            <Title>This is where you can find my contact</Title>
        </PageContainer>
     );
}
 
export default Contact;