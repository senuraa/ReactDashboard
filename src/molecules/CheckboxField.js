import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CheckBox from '../atoms/CheckBox'
import Typography from '../atoms/Typography'

const FieldWrap = styled.div`
  display: inline-flex;
`
const Label = styled(Typography)`
  margin-left: 1rem;
`
const CheckboxField = props => {
  const { label, color } = props
  return (
    <FieldWrap>
      <CheckBox {...props} />
      <Label color={color}>{label}</Label>
    </FieldWrap>
  )
}

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string
}

CheckboxField.defaultProps = {
  color: 'primary'
}

export default CheckboxField
