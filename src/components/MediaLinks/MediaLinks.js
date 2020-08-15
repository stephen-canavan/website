import React from "react"
import PropTypes from "prop-types"


import { Wrapper, MediaWrapper } from './styles';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

const query = graphql`
  {
    githubLogo: file(relativePath: {eq:"github-logo.png"}) {
      childImageSharp {
        fixed (width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    linkedinLogo: file(relativePath: {eq:"linkedin-logo.png"}) {
        childImageSharp {
            fixed (width: 250) {
            ...GatsbyImageSharpFixed
            }
        }
    }

    emailLogo: file(relativePath: {eq:"email-logo.png"}) {
        childImageSharp {
          fixed (width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
    }

  }
`;

const MediaLinks = () => {

  return (
    <Wrapper>
        <StaticQuery
            query={query}
            render={data => (
                <MediaWrapper>
                    <Img fixed={data.githubLogo.childImageSharp.fixed} className="logo" alt="logo"/>
                    <Img fixed={data.linkedinLogo.childImageSharp.fixed} className="logo" alt="logo"/>
                    <Img fixed={data.emailLogo.childImageSharp.fixed} className="logo" alt="logo"/>
                </MediaWrapper>
            )}
        />
    </Wrapper>
  )
}

export default MediaLinks
