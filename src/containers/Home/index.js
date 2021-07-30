import { BACKGROUND_COLOR } from "../../constants/Colors";
import PageContainer from "../../components/PageContainer";
import { Title } from "../../components/Text";

const Home = () => {
    return ( 
        <PageContainer className="home-container" backgroundColor={BACKGROUND_COLOR.home}>
            <Title>This is home page</Title>
        </PageContainer>
     );
}
 
export default Home;