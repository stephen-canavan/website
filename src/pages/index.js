import React from "react"
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout/Layout'
import HomeBanner from '@components/HomeBanner/HomeBanner'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({data}) => (
  <Layout title="Software Developer">
    <Container>
      <HomeBanner>
        <h1>STEPHEN CANAVAN</h1>
      </HomeBanner>
      
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    profileFixed: file(relativePath: {eq:"profile-circle.png"}) {
      childImageSharp {
        fixed (width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    profileColor: file(relativePath: {eq:"profile-circle-color2.png"}) {
      childImageSharp {
        fixed (width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    logoPlanet: file(relativePath: {eq:"logo-planet.png"}) {
      childImageSharp {
        fixed (width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage
