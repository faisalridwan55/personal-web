import { motion } from "framer-motion";
import { Row, Box } from "../../components/Grid";
import { Title } from "../../components/Text";
import { CustomNavLink, HeaderContainer } from "./components";

const itemContainerStyle = {width: "30%"};
const titleHeaderStyle = {size:"xl", textAlign:"center"};

const Header = () => {
    return ( 
        <HeaderContainer>
            <Row justifyContent="space-around" {...itemContainerStyle}>
                <CustomNavLink exact to="/">Home</CustomNavLink>
                <CustomNavLink to="/about">About</CustomNavLink>
            </Row>
            <Box as={motion.div} alignItem="Center" {...itemContainerStyle} whileHover={{ y: 20 }}>
                <Title {...titleHeaderStyle}>Faisal</Title>
                <Title {...titleHeaderStyle}>Ridwan</Title>
            </Box>
            <Row justifyContent="space-around" {...itemContainerStyle}>
                <CustomNavLink to="/skill">Skill & Portofolio</CustomNavLink>
                <CustomNavLink to="/contact">Contact</CustomNavLink>
            </Row>
        </HeaderContainer>
     );
}
 
export default Header;