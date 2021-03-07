import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const StyledButton = styled.button`
  padding: 1rem 3rem;
  background-color: ${props => props.theme.colors[props.color].main};
  color: ${props => props.theme.colors[props.color].contrastText};
  border: none;
  font-size: 1.125rem;
  font-weight: 300;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(255,255,255,0.8);
  }
  &:focus{
    outline: none;
  }
  &:focus-visible{
    outline: 3px solid ${props => props.theme.colors.black};
  }
`

const Button = props => {
  const { children, onClick, color } = props
  return (
    <StyledButton onClick={onClick} color={color}>{children}</StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default withTheme(Button)
