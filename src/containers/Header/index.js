import { HContainer, VContainer } from "../../components/Grid";
import { Title } from "../../components/Text";
import { CustomNavLink, HeaderContainer } from "./components";

const itemContainerStyle = {width: "30%"};

const Header = () => {
    return ( 
        <HeaderContainer>
            <HContainer justifyContent="space-around" {...itemContainerStyle}>
                <CustomNavLink exact to="/">Home</CustomNavLink>
                <CustomNavLink to="/about">About</CustomNavLink>
            </HContainer>
            <VContainer alignItem="Center" {...itemContainerStyle}>
                <Title size="xl">Faisal</Title>
                <Title size="xl">Ridwan</Title>
            </VContainer>
            <HContainer justifyContent="space-around" {...itemContainerStyle}>
                <CustomNavLink to="/skill">Skill & Portofolio</CustomNavLink>
                <CustomNavLink to="/contact">Contact</CustomNavLink>
            </HContainer>
        </HeaderContainer>
     );
}
 
export default Header;