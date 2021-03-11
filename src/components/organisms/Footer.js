import React from "react";
import styled from "styled-components";
import Typography from "../atoms/Typography";

const FooterWrap = styled.div`
  text-align: center;
  padding: 1rem;
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

export default Footer;
