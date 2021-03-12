import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-grid-system";
import IconInputField from "../molecules/IconInputField";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";
import { withRouter } from "react-router-dom";
import * as Constants from "../../config/Constants";
import CheckboxField from "../molecules/CheckboxField";
import SdLink from "../atoms/SdLink";

const InputFields = styled.div`
  margin-top: 1rem;
  justify-content: center;
  width: 100%;
`;

const SdRow = styled(Row)`
  margin-bottom: 1.5rem;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  renderError() {
    if (this.state.error) {
      return (
        <Typography variant={"p2"} color={"error"}>
          {this.state.error}
        </Typography>
      );
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <InputFields>
        {this.renderError()}
        <Row>
          <Col>
            <IconInputField
              icon={<Icon icon={"user"} />}
              placeholder={"Username"}
              name={"username"}
              value={username}
              onChange={this.handleOnChange}
            />
          </Col>
        </Row>
        <SdRow>
          <Col>
            <IconInputField
              icon={<Icon icon={"lock"} />}
              placeholder={"Password"}
              name={"password"}
              value={password}
              onChange={this.handleOnChange}
            />
          </Col>
        </SdRow>
        <SdRow>
          <Col xs={6}>
            <CheckboxField color={"secondary"} label={"Remember me"} />
          </Col>
          <Col xs={6}>
            <SdLink color={"secondary"} path={"#"} align={"right"}>
              Forgot password?
            </SdLink>
          </Col>
        </SdRow>
        <Row justify={"center"}>
          <Button color={"secondary"} onClick={this.handleLogin}>
            Login
          </Button>
        </Row>
      </InputFields>
    );
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ error: false });
  }

  handleLogin() {
    const { username, password } = this.state;
    if (username.length > 6 && password.length > 6) {
      this.props.history.push(Constants.ROUTE_USERS);
    } else {
      this.setState({ error: "Invalid Username or Password" });
    }
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
};
export default withRouter(LoginForm);
