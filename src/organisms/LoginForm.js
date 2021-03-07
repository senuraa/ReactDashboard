import React, {Component} from 'react';
import styled from 'styled-components';
import IconInputField from '../molecules/IconInputField';
import Icon from '../atoms/Icon';

const InputFields = styled.div`
  margin-top: 1rem;
`

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  render() {
    const {username, password} = this.state;
    return (
      <InputFields>
        <IconInputField icon={<Icon icon={'user'} />} placeholder={'Username'} name={'username'} value={username} onChange={this.handleOnChange}/>
        <IconInputField icon={<Icon icon={'lock'}/>} placeholder={'Password'} name={'password'} value={password} onChange={this.handleOnChange}/>
        <h1>{username}</h1>
      </InputFields>
    );
  }
  handleOnChange(event){
    const {name, value} = event.target;
    this.setState({[name]:value})
  }
}


export default LoginForm;
