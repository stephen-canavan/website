import React from "react"
import PropTypes from "prop-types"


import { Wrapper, TextHeading, MainText } from './styles';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

const query = graphql`
  {
    logoFixed: file(relativePath: {eq:"profile-circle-color2.png"}) {
      childImageSharp {
        fixed (width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    logoPlanet: file(relativePath: {eq:"logo-planet.png"}) {
        childImageSharp {
          fixed (width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
`;

const HomeBanner = ({ children }) => {

  return (
    <Wrapper>
        <StaticQuery
            query={query}
            render={data => (
                <Img fixed={data.logoPlanet.childImageSharp.fixed} className="logo" alt="logo"/>
            )}
        />
        <TextHeading>{children}</TextHeading>
        <MainText>Duis lacinia nec turpis ac pretium. Nulla fringilla ultrices nulla sit amet luctus. Suspendisse blandit tincidunt sapien eget tristique. Sed nec tempor nibh. Sed pulvinar id quam eget dignissim. Sed diam lacus, tempor sed efficitur quis, aliquet nec nulla</MainText>
    </Wrapper>
  )
}

HomeBanner.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default HomeBanner
