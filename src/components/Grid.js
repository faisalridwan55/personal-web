import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
`;

export const Box = (props) => (
  <BasicContainer flexDirection="column" {...props} />
);

export const Row = (props) => <BasicContainer flexDirection="row" {...props} />;
