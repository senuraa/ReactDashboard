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
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderArea = styled.div`
  width: 100%;
`;

const CenterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 11;
  overflow: hidden;
`;

const FooterArea = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.tertiary.main};
`;

const SidebarArea = styled.div`
  width: ${(props) => (props.open ? "calc(15%)" : 0)};
  background-color: ${(props) => props.theme.colors.grey};
  border-top-right-radius: 12rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const ContentArea = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Dashboard = (props) => {
  const [open, setOpen] = useState(true);
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
