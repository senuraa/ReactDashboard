import React from 'react'
import { Container } from 'react-grid-system';
import PropTypes from 'prop-types'

const HomeContent = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

HomeContent.propTypes = {
  children: PropTypes.node
}

export default HomeContent
