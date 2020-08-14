import PropTypes from "prop-types"
import React from "react"
import {Navbar} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Stephen Canavan
      </Navbar.Brand>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
