import React from 'react'
import Typography from '../atoms/Typography'
import Button from '../atoms/Button'

const Login = () => (
    <div>
      <Typography color='secondary' variant={'h1'}>Testing Login Typo</Typography>
      <Button color='secondary' onClick={()=>alert('testing')}>Testing</Button>
    </div>
  )

export default Login
