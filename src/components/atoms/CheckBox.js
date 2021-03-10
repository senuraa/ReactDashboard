import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SdCheckbox = styled.input`
  border: 1px solid ${(props) => props.theme.colors.text.primary};
  border-radius: 20%;
  width: 1.125rem;
  height: 1.125rem;
`;

const CheckBox = (props) => {
  const { value, onChange } = props;
  return <SdCheckbox type={"checkbox"} value={value} onChange={onChange} />;
};

CheckBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckBox;
