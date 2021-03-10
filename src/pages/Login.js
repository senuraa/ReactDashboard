import React from "react";
import HomeContent from "../components/templates/HomeContent";
import LoginForm from "../components/organisms/LoginForm";
import { Row, Col } from "react-grid-system";
import Typography from "../components/atoms/Typography";

const Login = () => {
  return (
    <HomeContent>
      <Row>
        <Col>
          <Typography color={"secondary"} variant={"h1"} align={"center"}>
            Welcome to Springboard
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography color={"secondary"} variant={"p2"} align={"center"}>
            Please log in to continue
          </Typography>
        </Col>
      </Row>
      <LoginForm />
    </HomeContent>
  );
};

export default Login;
