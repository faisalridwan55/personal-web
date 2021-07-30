import styled from "styled-components";

import { VContainer } from "./Grid";

const PageContainer = styled(VContainer)`
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export default PageContainer;