import React, { useContext } from "react";
import RouteArray from "../../config/routes/RouteConfig";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarMenuContext } from "../../pages/Dashboard";

const SidebarWrap = styled.div((props) => ({
  transform: props.open ? "" : "translateX(-100%)",
  width: "calc(1vw * 15)",
}));

const Sidebar = () => {
  const { open } = useContext(SidebarMenuContext);
  return (
    <SidebarWrap open={open}>
      <ul>
        {RouteArray.map((route, index) => {
          return (
            <li key={index}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </SidebarWrap>
  );
};

export default Sidebar;
