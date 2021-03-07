import React from 'react'
import Typography from '../atoms/Typography'
import Button from '../atoms/Button'
import InputField from '../atoms/InputField'
import IconInputField from '../molecules/IconInputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const userIco = <FontAwesomeIcon icon={['fa','user']}/>

const Login = () => {
  return (
    <div>
      <Typography color='secondary' variant={'h1'}>Testing Login Typo</Typography>
      <Button color='secondary' onClick={() => alert('testing')}>Testing</Button>
      <InputField name={'Testing'} placeholder={'Username'} variant={'filled'}/>
      <IconInputField icon={userIco} name={'Testing'} placeholder={'Username'} variant={'standard'} />
    </div>
  )
}

export default Login
