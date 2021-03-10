import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import { SidebarMenuContext } from "../../pages/Dashboard";

const IconWrap = styled.div`
  width: 2rem;
`;

const HamburgerMenuButton = () => {
  const { open, setOpen } = useContext(SidebarMenuContext);
  const color = open ? "secondary" : "primary";
  return (
    <IconWrap>
      <Button color={color} onClick={() => setOpen(!open)}>
        <Icon icon={"bars"} />
      </Button>
    </IconWrap>
  );
};

export default HamburgerMenuButton;
