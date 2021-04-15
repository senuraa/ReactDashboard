// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-grid-system";
import IconInputField from "../molecules/IconInputField";
import Icon from "../atoms/Icon";
import InputTags from "../molecules/InputTags";
// eslint-disable-next-line no-unused-vars
import Button from "../atoms/Button";
import { createUser } from "../../api/users";
import Typography from "../atoms/Typography";

const FormWrap = styled.form`
  width: 100%;
`;
const SdRow = styled(Row)`
  margin-top: 1rem;
`;
const ErrorComp = () => {
  return (
    <Typography color={"error"} align={"center"} variant={"p1"}>
      Error occurred while creating user
    </Typography>
  );
};
const CreateUserForm = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    departmentName: "",
    roles: [],
  };
  const [user, setUser] = useState(initState);
  const [hasError, setHasError] = useState(false);
  const getTags = (tags) => {
    setUser({ ...user, roles: tags });
  };
  const submit = (e) => {
    e.preventDefault();
    createUser(user)
      .then(() => setUser(initState))
      .catch(() => setHasError(true));
  };
  const onChange = (e, param) => {
    setHasError(false);
    setUser({ ...user, [param]: e.target.value });
  };
  return (
    <FormWrap onSubmit={submit}>
      {hasError && <ErrorComp />}
      <Row>
        <Col>
          <IconInputField
            icon={<Icon icon={"user"} />}
            variant={"filled"}
            placeholder={"First Name"}
            value={user.firstName}
            required={true}
            onChange={(e) => onChange(e, "firstName")}
          />
        </Col>
        <Col>
          <IconInputField
            icon={<Icon icon={"user"} />}
            variant={"filled"}
            placeholder={"Last Name"}
            value={user.lastName}
            required={true}
            onChange={(e) => onChange(e, "lastName")}
          />
        </Col>
      </Row>
      <SdRow>
        <Col>
          <IconInputField
            icon={<Icon icon={"envelope"} />}
            variant={"filled"}
            placeholder={"Email Address"}
            value={user.email}
            required={true}
            type={"email"}
            onChange={(e) => onChange(e, "email")}
          />
        </Col>
        <Col>
          <IconInputField
            icon={<Icon icon={"users"} />}
            variant={"filled"}
            placeholder={"Department"}
            value={user.departmentName}
            required={true}
            onChange={(e) => onChange(e, "departmentName")}
          />
        </Col>
      </SdRow>
      <SdRow>
        <Col>
          <InputTags getTags={getTags} label={"User Roles"} />
        </Col>
      </SdRow>
      <SdRow>
        <Button color={"primary"} type={"submit"}>
          Create User
        </Button>
      </SdRow>
    </FormWrap>
  );
};
CreateUserForm.propTypes = {};

export default CreateUserForm;
