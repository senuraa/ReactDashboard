import React from "react";
import styled, { withTheme } from "styled-components";
import Typography from "../components/atoms/Typography";
import CreateUserForm from "../components/organisms/CreateUserForm";

const FormContainer = styled.div`
  height: 100%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.formBg};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const CreateUser = () => {
  return (
    <FormContainer>
      <Typography variant={"h1"} align={"center"} color={"primary"}>
        Create User
      </Typography>
      <Typography
        variant={"p1"}
        align={"center"}
        color={"primary"}
        fontWeight={400}
        margin={"0.5rem 0"}
      >
        Add users into the Springboard platform.
      </Typography>
      <CreateUserForm />
    </FormContainer>
  );
};

export default withTheme(CreateUser);
