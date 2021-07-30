import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Box } from "./Grid";
import { BACKGROUND_COLOR } from "../constants/Colors";


const PageContainer = (props) => {
  const verticalPadding = 100;
  const PageContainer = styled(Box)`
    padding: ${verticalPadding}px 10%;
    min-height: calc(100vh - ${verticalPadding * 2}px);
    background-color: ${props => BACKGROUND_COLOR[props.currentPath || 'home']};
  `;
  const page = useLocation().pathname.replace('/', '');

  return <PageContainer currentPath={page} {...props} />
}

export default PageContainer