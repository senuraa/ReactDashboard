import React, { useContext } from "react";
import RouteArray from "../../config/routes/RouteConfig";
import styled from "styled-components";
import { SidebarMenuContext } from "../../pages/Dashboard";
import SidebarButton from "../molecules/SidebarButton";

const SidebarWrap = styled.div((props) => ({
  transform: props.open ? "" : "translateX(-100%)",
  width: "calc(1vw * 15)",
  "margin-top": "12rem",
}));

const Ul = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
`;
const Sidebar = () => {
  const { open } = useContext(SidebarMenuContext);
  return (
    <SidebarWrap open={open}>
      <Ul>
        {RouteArray.map((route, index) => {
          return <SidebarButton route={route} key={index} />;
        })}
      </Ul>
    </SidebarWrap>
  );
};

export default Sidebar;
