import React from "react"
import PropTypes from "prop-types"
 
import { Link } from 'gatsby';
import { Wrapper, Container, Text, Border, Button, Highlight } from './styles';

const BorderedBanner = ({ children }) => {

  return (
    <Container>
        <Border>
            <Wrapper>
                <Text>This website is under construction and is not yet complete. The site is being developed using <Highlight>Gatsby</Highlight>, <Highlight>ReactJS</Highlight>, and <Highlight>EmotionJS</Highlight>. </Text>
                <Text>This site is hosted using <Highlight>Netlify</Highlight> which deploys builds from the master branch of this <Highlight>Github</Highlight> repository: </Text>
                <Link to="https://github.com/stephen-canavan/website" target="_blank">
                    <Button> View on Github</Button>
                </Link>
            </Wrapper>
        </Border>
    </Container>
    
  )
}

BorderedBanner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default BorderedBanner
