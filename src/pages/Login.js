import React from "react";
import LoginForm from "../components/organisms/LoginForm";
import { Row, Col } from "react-grid-system";
import Typography from "../components/atoms/Typography";
import LoginTemplate from "../components/templates/LoginTemplate";

const Login = () => {
  return (
    <LoginTemplate>
      <Row>
        <Col>
          <Typography
            color={"secondary"}
            variant={"h1"}
            align={"center"}
            margin={"0 0 1rem 0"}
          >
            Welcome to Springboard
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            color={"secondary"}
            variant={"p2"}
            align={"center"}
            margin={"0 0 2rem 0"}
          >
            Please log in to continue
          </Typography>
        </Col>
      </Row>
      <LoginForm />
    </LoginTemplate>
  );
};

export default Login;
