import { BACKGROUND_COLOR } from "../../constants/Colors";
import PageContainer from "../../components/PageContainer";
import { Title } from "../../components/Text";

const SkillAndPortofolios = () => {
    return ( 
        <PageContainer className="home-container" backgroundColor={BACKGROUND_COLOR.skill}>
            <Title>This is Skill & Portofolios page</Title>
        </PageContainer>
     );
}
 
export default SkillAndPortofolios;