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
  padding: 0.5rem;
`;
const LastName = styled(Typography)`
  font-weight: 700;
`;

const UserCardHeader = (props) => {
  const { firstName, lastName, onClick } = props;
  return (
    <HeaderWrap {...props}>
      <NamesContainer>
        <Typography color={"primary"} variant={"p2"} align={"left"}>
          {firstName}
        </Typography>
        <LastName color={"primary"} variant={"p2"} align={"left"}>
          {lastName}
        </LastName>
      </NamesContainer>
      <Button color={"tertiary"} onClick={onClick}>
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
