import { Title } from "../../components/Text";
import PageContainer from "../../components/PageContainer";

const Home = () => {
    const now = new Date();
    console.log(now.toLocaleString())

    return ( 
        <PageContainer className="home-container">
            <Title>Hello guys!</Title>
        </PageContainer>
     );
}
 
export default Home;