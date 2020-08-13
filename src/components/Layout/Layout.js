/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "@components/Header/Header"
import StyleProvider from "@components/StyleProvider/StyleProvider"
import Head from "@components/Head/Head"

import { metaData } from "@data/data"

const Layout = ({ title, children }) => {

  return (
    <StyleProvider>
      <Head meta={metaData} title={title}/>
      <Header siteTitle={metaData.title} />
      <main>{children}</main>
    </StyleProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
