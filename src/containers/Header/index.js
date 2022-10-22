import {
  CustomNavLink,
  HeaderContainer,
  NavButton,
  NavTitle,
} from "./components";

import { Row, Box } from "../../components/Grid";
import IsDesktop from "../../functions/isDesktop";

const Header = ({ showSidebar, handleNavButtonClicked }) => {
  const isDesktop = IsDesktop();
  const itemContainerStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <HeaderContainer>
      {isDesktop ? (
        <Row>
          <Box style={{ ...itemContainerStyle }}>
            <CustomNavLink exact to="/">
              Home
            </CustomNavLink>
          </Box>
          <Box style={{ ...itemContainerStyle }}>
            <CustomNavLink to="/about">About</CustomNavLink>
          </Box>
          <Box style={{ ...itemContainerStyle }}>
            <NavTitle />
          </Box>
          <Box style={{ ...itemContainerStyle }}>
            <CustomNavLink to="/skill">Skill & Portofolio</CustomNavLink>
          </Box>
          <Box style={{ ...itemContainerStyle }}>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </Box>
        </Row>
      ) : (
        <Row>
          <NavButton
            open={showSidebar}
            onClick={() => handleNavButtonClicked(!showSidebar)}
          />
          <NavTitle />
        </Row>
      )}
    </HeaderContainer>
  );
};

export default Header;
