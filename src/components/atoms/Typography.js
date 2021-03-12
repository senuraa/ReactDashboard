import React from "react";
import { node, string } from "prop-types";
import styled, { withTheme } from "styled-components";

const Component = styled.p`
  color: ${(props) => props.theme.colors.text[props.color]};
  font-size: ${(props) => props.theme.typography[props.variant].fontSize};
  font-weight: ${(props) => props.theme.typography[props.variant].fontWeight};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;
const Typography = (props) => {
  const { variant, children, align, margin } = props;
  const tag = variant.includes("p") ? "p" : variant;
  return (
    <Component as={tag} align={align} margin={margin} {...props}>
      {children}
    </Component>
  );
};
Typography.propTypes = {
  variant: string,
  color: string,
  children: node.isRequired,
  align: string,
  margin: string,
};

Typography.defaultProps = {
  variant: "p1",
  color: "tertiary",
  align: "left",
};
export default withTheme(Typography);
