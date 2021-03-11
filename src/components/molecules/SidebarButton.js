import React from "react";
import { object, shape, string } from "prop-types";
import styled, { withTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "../atoms/Icon";

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const ItemLink = styled(NavLink)`
  padding: 1rem;
  display: block;
  text-decoration: none;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.tertiary.main};
  transition: 0.3s;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.tertiary.main};
    color: ${(props) => props.theme.colors.tertiary.contrastText};
  }
`;

const LinkTitle = styled.span`
  margin-left: 1rem;
`;

const SidebarButton = (props) => {
  const { title, path, icon } = props.route;
  return (
    <ListItem>
      <ItemLink to={path} theme={props.theme}>
        <Icon icon={icon} />
        <LinkTitle>{title}</LinkTitle>
      </ItemLink>
    </ListItem>
  );
};

SidebarButton.propTypes = {
  route: shape({
    title: string.isRequired,
    path: string.isRequired,
    icon: string.isRequired,
  }),
  theme: object.isRequired,
};

export default withTheme(SidebarButton);
