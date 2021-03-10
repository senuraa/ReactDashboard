import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import * as Constants from "../../config/Constants";

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  font-size: 1rem;
  font-weight: 700;
  background: ${(props) =>
    props.variant === Constants.INPUT_STD
      ? props.theme.colors.white
      : "transparent"};

  &::placeholder,
  &::-webkit-input-placeholder {
    opacity: 1;
    color: ${(props) => props.theme.colors.text.primary};
  }

  border-radius: 0.3rem;
  border: ${(props) =>
    props.variant === Constants.INPUT_STD
      ? `1px solid ${props.theme.colors.text.primary}`
      : "none"};
  border-bottom: ${(props) =>
    props.variant === Constants.INPUT_FILLED
      ? `2px solid ${props.theme.colors.text.primary}`
      : ""};
`;

const InputField = (props) => {
  const { variant, type, value, name, placeholder, onChange, required } = props;
  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      variant={variant}
      {...props}
    />
  );
};

InputField.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

InputField.defaultProps = {
  variant: "standard",
  type: "text",
  required: false,
};

export default withTheme(InputField);
