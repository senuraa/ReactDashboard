import React from 'react'
import InputField from '../atoms/InputField'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.div`
  position:relative;
`

const IconHolder = styled.div`
  position: absolute;
  top: 1.125rem;
  left: 1rem;
  color: ${props => props.theme.colors.text.primary};
`

const IconInputField = props => {
  const { icon, ...other } = props
  return (
    <InputWrapper>
      <IconHolder>{icon}</IconHolder>
      <InputField {...other} />
    </InputWrapper>
  )
}

IconInputField.propTypes = {
  icon: PropTypes.element,
}

export default IconInputField
