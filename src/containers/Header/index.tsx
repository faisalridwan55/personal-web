import { motion } from "framer-motion";

import { CustomNavLink, HeaderContainer, NavButton } from "./components";

import { Title } from "../../components/Text";
import { Row, Box } from "../../components/Grid";
import IsDesktop from "../../functions/isDesktop";

const itemContainerStyle = { width: "30%" };
const titleHeaderStyle = { size: "xl", textAlign: "center" };

const Header = ({
  showSidebar,
  handleNavButtonClicked,
}: {
  showSidebar: boolean;
  handleNavButtonClicked: Function;
}) => {
  const isDesktop = IsDesktop();

  const NavTitle = () => (
    <Box
      as={motion.div}
      alignItem="Center"
      width={isDesktop ? "30%" : "100%"}
      whileHover={{ y: 20 }}
    >
      <Title {...titleHeaderStyle}>Faisal</Title>
      <Title {...titleHeaderStyle}>Ridwan</Title>
    </Box>
  );

  return (
    <HeaderContainer>
      {isDesktop ? (
        <>
          <Row justifyContent="space-around" {...itemContainerStyle}>
            <CustomNavLink exact to="/">
              Home
            </CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
          </Row>
          <NavTitle />
          <Row justifyContent="space-around" {...itemContainerStyle}>
            <CustomNavLink to="/skill">Skill & Portofolio</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </Row>
        </>
      ) : (
        <>
          <Box>
            <NavButton
              open={showSidebar}
              onClick={() => handleNavButtonClicked(!showSidebar)}
            />
          </Box>
          <Box>
            <NavTitle />
          </Box>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
