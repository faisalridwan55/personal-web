import { CustomNavLink, HeaderContainer, ItemContainer } from "./components";

const Header = () => {
    return ( 
        <HeaderContainer>
            <ItemContainer justifyContent="space-around">
                <CustomNavLink exact to="/">Home</CustomNavLink>
                <CustomNavLink to="/about">About</CustomNavLink>
            </ItemContainer>
            <ItemContainer justifyContent="center">
                <h2>Faisal Ridwan</h2>
            </ItemContainer>
            <ItemContainer justifyContent="space-around">
                <CustomNavLink to="/skill">Skill & Porto</CustomNavLink>
                <CustomNavLink to="/contact">Contact</CustomNavLink>
            </ItemContainer>
        </HeaderContainer>
     );
}
 
export default Header;