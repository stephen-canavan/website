/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import StyleProvider from "@components/StyleProvider/StyleProvider"
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Head from "@components/Head/Head"
import Footer from "./components/Footer/Footer"
import NavigationBar from "@components/Navbar/NavigationBar";
import { Main } from './styles';

const Layout = ({ title, children }) => {

  return (
    <StyleProvider>
      <Head title={title}/>
      <GlobalStyles/>
        <NavigationBar/>
        <Main>{children}</Main>
        <Footer/>
    </StyleProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
