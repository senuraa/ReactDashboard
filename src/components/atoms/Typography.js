import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";

const Component = styled.p`
  color: ${(props) => props.theme.colors.text[props.color]};
  font-size: ${(props) => props.theme.typography[props.variant].fontSize};
  font-weight: ${(props) => props.theme.typography[props.variant].fontWeight};
  text-align: ${(props) => props.align};
`;
const Typography = (props) => {
  const { variant, children, align } = props;
  const tag = variant.includes("p") ? "p" : variant;
  return (
    <Component as={tag} align={align} {...props}>
      {children}
    </Component>
  );
};
Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

Typography.defaultProps = {
  variant: "p1",
  color: "tertiary",
  align: "left",
};
export default withTheme(Typography);
