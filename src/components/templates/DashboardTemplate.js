import React, { Component } from "react";
import styled, { createGlobalStyle, withTheme } from "styled-components";
import { bool, node } from "prop-types";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.secondary.main}
  }
`;

const DashboardWrap = styled.div`
  width: 100%;
`;

const HeaderArea = styled.div`
  width: 100%;
`;

const CenterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const FooterArea = styled.div`
  width: 100%;
`;

const SidebarArea = styled.div`
  width: ${(props) => (props.open ? "calc(1%*var(--landscape-width))" : 0)};
`;

const ContentArea = styled.div`
  flex-grow: 1;
`;

class DashboardTemplate extends Component {
  render() {
    const { header, sidebar, content, footer, open } = this.props;
    return (
      <DashboardWrap>
        <GlobalStyle props={this.props} />
        <HeaderArea>{header}</HeaderArea>
        <CenterArea>
          <SidebarArea open={open}>{sidebar}</SidebarArea>
          <ContentArea>{content}</ContentArea>
        </CenterArea>
        <FooterArea>{footer}</FooterArea>
      </DashboardWrap>
    );
  }
}

DashboardTemplate.propTypes = {
  header: node.isRequired,
  sidebar: node.isRequired,
  content: node.isRequired,
  footer: node.isRequired,
  open: bool.isRequired,
};

export default withTheme(DashboardTemplate);
