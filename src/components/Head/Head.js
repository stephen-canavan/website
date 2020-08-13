import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Head = ({ meta, title }) => {
  const titleTemp = "%s | " + title;
  return (
    <Helmet titleTemplate={titleTemp}>
      <title>Stephen Canavan</title>
      <meta charSet="utf-8"/>
      <meta name="description" content="Stephen Canavan - Software Developer" />
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
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    charset: PropTypes.string,
    author: PropTypes.string,
  }),
  title: PropTypes.string,
}

export default Head