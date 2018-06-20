import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const AboutPage = () => (
  <div>
    <h1>Introduction to Gatsby</h1>
    <p>
      Gatsby is your friendly, blazing fast static site generator for React. And
      after nearly a year of research, prototyping, and testing, Gatsby v1 is
      ready for action. Static site generators offer many benefits over
      traditional dynamic website frameworks —{' '}
      <i>
        better performance, higher security, lower cost of scaling, and a better
        developer experience.
      </i>
    </p>

    <StyledAnchor
      href="https://www.gatsbyjs.org/blog/gatsby-v1/"
      target="_blank"
    >
      Source
    </StyledAnchor>

    <StyledLink to="/">Voltar para a homepage</StyledLink>
  </div>
)

export default AboutPage

const StyledLink = styled(Link)`
  margin-bottom: 40px;
  display: block;
  color: inherit;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledAnchor = StyledLink.withComponent('a')
