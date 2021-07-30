import styled from "styled-components";

import { Box } from "./Grid";

const PageContainer = styled(Box)`
  min-height: 100vh;
  padding: 100px 10%;
  background-color: ${props => props.backgroundColor};
`;

export default PageContainer;