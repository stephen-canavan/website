import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { meta } from "@data"

const Head = ({ title }) => {
  const titleTemp = "%s | " + title;
  const url = "https://www.stephen-canavan.com"
  return (
    <Helmet titleTemplate={titleTemp} >
      <title>Stephen Canavan</title>
      <meta charSet="utf-8"/>
      <meta name="description" content={meta.description} />
      <meta content={`@images/logo-planet.png`} property="og:image" />
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