import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Box } from "./Grid";
import { BACKGROUND_COLOR } from "../constants/Colors";


const PageContainer = (props) => {
  const PageContainer = styled(Box)`
    min-height: 100vh;
    padding: 100px 10%;
    background-color: ${props => BACKGROUND_COLOR[props.currentPath || 'home']};
  `;
  const page = useLocation().pathname.replace('/', '');

  return <PageContainer currentPath={page} {...props} />
}

export default PageContainer