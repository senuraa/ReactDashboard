import React from "react";
import { func, string } from "prop-types";
import styled, { withTheme } from "styled-components";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey};
`;

const NamesContainer = styled.div`
  display: block;
`;

const UserCardHeader = (props) => {
  const { firstName, lastName, onClick } = props;
  return (
    <HeaderWrap {...props}>
      <NamesContainer>
        <Typography color={"secondary"} variant={"p2"} align={"left"}>
          {firstName}
        </Typography>
        <Typography color={"secondary"} variant={"p2"} align={"left"}>
          {lastName}
        </Typography>
      </NamesContainer>
      <Button color={"primary"} onClick={onClick}>
        <Icon icon={"trash-alt"} />
      </Button>
    </HeaderWrap>
  );
};

UserCardHeader.propTypes = {
  firstName: string,
  lastName: string,
  onClick: func.isRequired,
};

export default withTheme(UserCardHeader);
