import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { meta } from "@data"

import { fonts } from './fonts'

const Head = ({ title }) => {
  const titleTemp = "%s | " + title;
  return (
    <Helmet titleTemplate={titleTemp} >
      <title>Stephen Canavan</title>
      <meta charSet="utf-8"/>
      <meta name="description" content={meta.description} />
      <style type="text/css">{fonts}</style>
    </Helmet>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
}

Head.propTypes = {
  title: PropTypes.string,
}

export default Head