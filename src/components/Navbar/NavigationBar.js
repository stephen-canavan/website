import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { graphql, StaticQuery, Link } from 'gatsby';
import  Img  from 'gatsby-image';
import { DarkNavBar, PageLink, NavCollapse, MediaIcon, NavIcons } from './styles';

import { externalLinks } from '@data'

const query = graphql`
  {
    logoFixed: file(relativePath: {eq:"logo-planet.png"}) {
      childImageSharp {
        fixed (width: 45) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    gitLogo: file(relativePath: {eq:"github-logo.png"}) {
      childImageSharp {
        fixed (width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    linkedinLogo: file(relativePath: {eq:"linkedin-logo.png"}) {
      childImageSharp {
        fixed (width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    emailLogo: file(relativePath: {eq:"email-logo.png"}) {
      childImageSharp {
        fixed (width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const NavigationBar = () => {
  return (
      <DarkNavBar variant="dark" bg="dark" expand="lg">
        <StaticQuery
            query={query}
            render={data => (
          <>
            <Navbar.Brand>
                <Img fixed={data.logoFixed.childImageSharp.fixed} className="logo" alt="logo"/>     
            </Navbar.Brand>
            
            <Nav>
              <Nav.Item as="li" className="title">
                  STEPHEN CANAVAN
              </Nav.Item>
            </Nav>

            <Navbar.Toggle aria-controls="navBarResponsive" />

            <NavCollapse id="navBarResponsive" >

              <Nav as="ul" className="ml-auto page-links">
                <PageLink as="li">
                  <Link to="/" className="nav-link" activeClassName="active"> Home </Link>
                </PageLink>
                <PageLink as="li">
                  <Link to="/404" className="nav-link" activeClassName="active"> About </Link>
                </PageLink>
                <PageLink as="li">
                  <Link to="/404" className="nav-link" activeClassName="active"> Projects </Link>
                </PageLink>
              </Nav>

              <NavIcons as="ul" className="ml-auto">
                <MediaIcon as="li" className="media">
                  <Link to="https://github.com/stephen-canavan/" target="_blank" className="nav-link" activeClassName="active">
                      <Img fixed={data.gitLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </MediaIcon>
                <MediaIcon as="li" className="media">
                  <Link to="https://linkedin.com/in/stephen-canavan/" target="_blank" className="nav-link" activeClassName="active">
                      <Img fixed={data.linkedinLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </MediaIcon>
                <MediaIcon as="li" className="media">
                  <Link to="/404" className="nav-link" activeClassName="active">
                      <Img fixed={data.emailLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </MediaIcon>
              </NavIcons>
            
            </NavCollapse>
          </>)}
        />
      </DarkNavBar>
  );
};



export default NavigationBar;