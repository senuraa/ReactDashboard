import React from "react";
import { Container } from "react-grid-system";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SdContainer = styled(Container)`
  height: 100%;
`;
const HomeContent = (props) => {
  return (
    <SdContainer>
      <FormContainer>{props.children}</FormContainer>
    </SdContainer>
  );
};

HomeContent.propTypes = {
  children: PropTypes.node,
};

export default HomeContent;
