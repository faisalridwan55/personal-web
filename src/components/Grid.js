import styled from "styled-components";
import IsDesktop from "../functions/isDesktop";

const BasicContainer = styled.div`
  display: flex;
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  ${(props) => props.flex && `flex: ${props.flex}`};

  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.paddingTop && `padding-top: ${props.paddingTop}`};
  ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft}`};
  ${(props) => props.paddingRight && `padding-right: ${props.paddingRight}`};
  ${(props) => props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};

  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
`;

export const Box = (props) => (
  <BasicContainer flexDirection="column" {...props} />
);

export const Row = (props) => <BasicContainer flexDirection="row" {...props} />;

export const ResponsiveRow = (props) => (
  <BasicContainer flexDirection={IsDesktop() ? "row" : "column"} {...props} />
);
