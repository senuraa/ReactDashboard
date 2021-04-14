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

const FormWrap = styled.form`
  width: 100%;
`;
const SdRow = styled(Row)`
  margin-top: 1rem;
`;

const CreateUserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentName: "",
    roles: [],
  });
  const getTags = (tags) => {
    setUser({ ...user, roles: tags });
  };
  const submit = (e) => {
    e.preventDefault();
    createUser(user).then((r) => console.log(r));
  };
  return (
    <FormWrap onSubmit={submit}>
      <Row>
        <Col>
          <IconInputField
            icon={<Icon icon={"user"} />}
            variant={"filled"}
            placeholder={"First Name"}
            value={user.firstName}
            required={true}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </Col>
        <Col>
          <IconInputField
            icon={<Icon icon={"user"} />}
            variant={"filled"}
            placeholder={"Last Name"}
            value={user.lastName}
            required={true}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Col>
        <Col>
          <IconInputField
            icon={<Icon icon={"users"} />}
            variant={"filled"}
            placeholder={"Department"}
            value={user.departmentName}
            required={true}
            onChange={(e) =>
              setUser({ ...user, departmentName: e.target.value })
            }
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
