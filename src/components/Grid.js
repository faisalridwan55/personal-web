import styled from "styled-components"

const BasicContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
`;

export const Box = (props) => <BasicContainer flexDirection="column" {...props} />

export const Row = (props) => <BasicContainer flexDirection="row" {...props} />