import React from "react"
import PropTypes from "prop-types"
import { Wrapper, Heading } from "./styles";

const Footer = ({ children }) => {

  return (
      <Wrapper>
          <Heading>
          © Stephen Canavan 2020
          </Heading>
      </Wrapper>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
