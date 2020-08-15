import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { graphql, StaticQuery, Link } from 'gatsby';
import  Img  from 'gatsby-image';
import { DarkNavBar, PageLink, Container } from './styles';

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
    <Container>
      <DarkNavBar variant="dark" bg="dark" expand="md">
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

            <Navbar.Collapse id="navBarResponsive" >

              <Nav as="ul" className="ml-auto page-links">
                <PageLink as="li">
                  <Link to="/" className="nav-link" activeClassName="active"> Home </Link>
                </PageLink>
                <PageLink as="li">
                  <Link to="/about" className="nav-link" activeClassName="active"> About </Link>
                </PageLink>
                <PageLink as="li">
                  <Link to="/projects" className="nav-link" activeClassName="active"> Projects </Link>
                </PageLink>
              </Nav>

              <Nav as="ul" className="ml-auto">
                <Nav.Item as="li" className="media">
                  <Link to="/projects" className="nav-link" activeClassName="active">
                      <Img fixed={data.gitLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="media">
                  <Link to="/projects" className="nav-link" activeClassName="active">
                      <Img fixed={data.linkedinLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="media">
                  <Link to="/projects" className="nav-link" activeClassName="active">
                      <Img fixed={data.emailLogo.childImageSharp.fixed} alt="logo"/>
                  </Link>
                </Nav.Item>
              </Nav>
            
            </Navbar.Collapse>
          </>)}
        />
      </DarkNavBar>
    </Container>
  );
};



export default NavigationBar;