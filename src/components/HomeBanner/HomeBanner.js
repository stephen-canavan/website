import React from "react"
import PropTypes from "prop-types"


import { Wrapper, TextHeading, MainText, SubHeading } from './styles';
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
          fixed (width: 160) {
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
        <TextHeading>STEPHEN CANAVAN</TextHeading>
        <SubHeading>Software Developer</SubHeading>
        <MainText>My name is Stephen, I am a software developer from Dublin. The purpose of this site is to provide an outlet for me to showcase and discuss some of my work and personal projects </MainText>
    </Wrapper>
  )
}

HomeBanner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default HomeBanner
