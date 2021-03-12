import React from "react";
import styled, { withTheme } from "styled-components";
import Typography from "../atoms/Typography";

const FooterWrap = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.tertiary.main};
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Typography color={"secondary"} variant={"p1"} align={"center"}>
        Designed and Powered by Trabeya
      </Typography>
    </FooterWrap>
  );
};

export default withTheme(Footer);
