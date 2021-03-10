import React, { createContext, useState } from "react";
import Header from "../components/organisms/Header";
import Sidebar from "../components/organisms/Sidebar";
import Routes from "../config/routes/Routes";
import Footer from "../components/organisms/Footer";
import styled, { createGlobalStyle, withTheme } from "styled-components";

export const SidebarMenuContext = createContext(null);
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
  width: ${(props) => (props.open ? "calc(25%)" : 0)};
`;

const ContentArea = styled.div`
  flex-grow: 1;
`;

const Dashboard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarMenuContext.Provider value={{ open, setOpen }}>
      <DashboardWrap>
        <GlobalStyle props={props} />
        <HeaderArea>
          <Header />
        </HeaderArea>
        <CenterArea>
          <SidebarArea open={open}>
            <Sidebar />
          </SidebarArea>
          <ContentArea>
            <Routes />
          </ContentArea>
        </CenterArea>
        <FooterArea>
          <Footer />
        </FooterArea>
      </DashboardWrap>
    </SidebarMenuContext.Provider>
  );
};

export default withTheme(Dashboard);
