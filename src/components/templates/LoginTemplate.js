import React from "react";
import { Container } from "react-grid-system";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../organisms/Footer";

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
const SdFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const LoginTemplate = (props) => {
  return (
    <>
      <SdContainer>
        <FormContainer>{props.children}</FormContainer>
      </SdContainer>
      <SdFooter />
    </>
  );
};

LoginTemplate.propTypes = {
  children: PropTypes.node,
};

export default LoginTemplate;
