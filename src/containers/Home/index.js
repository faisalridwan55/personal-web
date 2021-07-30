import { BACKGROUND_COLOR } from "../../constants/Colors";
import PageContainer from "../../components/PageContainer";
import { Title } from "../../components/Text";

const Home = () => {
    const now = new Date();
    console.log(now.toLocaleString())

    return ( 
        <PageContainer className="home-container" backgroundColor={BACKGROUND_COLOR.home}>
            <Title>Hello guys!</Title>
        </PageContainer>
     );
}
 
export default Home;