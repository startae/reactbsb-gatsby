import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import netlifyImage from '../assets/netlify.svg'
import fromZeroImage from '../assets/from-zero.svg'
import reactImage from '../assets/react.svg'
import githubImage from '../assets/github.svg'
import deployImage from '../assets/deploy.svg'

const IndexPage = () => (
  <div>
    <Hero>
      <Title>Gatsby: do zero ao deploy</Title>
      <SubTitle>Esta é uma aplicação utilizando Gatsby</SubTitle>
      <Icons>
        <IconWrapper>
          <img src={reactImage} alt="logo do react" width="60" height="60" />
          <IconLabel>
            React is <br />awesome
          </IconLabel>
        </IconWrapper>
        <IconWrapper>
          <img
            src={fromZeroImage}
            alt="gráfico subindo"
            width="60"
            height="60"
          />
          <IconLabel>
            Aplicação <br />do zero
          </IconLabel>
        </IconWrapper>
        <IconWrapper>
          <img
            src={netlifyImage}
            alt="logo do netlify"
            width="60"
            height="60"
          />
          <IconLabel>
            Ao deploy <br />com o Netlify
          </IconLabel>
        </IconWrapper>
        <IconWrapper>
          <img src={githubImage} alt="logo do github" width="60" height="62" />
          <IconLabel>
            <StyledLink
              href="https://github.com/startae/reactbsb-gatsby"
              target="_blank"
            >
              Repositório <br />no github
            </StyledLink>
          </IconLabel>
        </IconWrapper>
      </Icons>
      <Link to="/about">
        <Button>Mais sobre o Gatsby</Button>
      </Link>
    </Hero>
  </div>
)

export default IndexPage

const Button = styled.button`
  border: 0;
  background-color: #444;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: rgba(68, 68, 68, 0.8);
  }
`

const StyledLink = styled.a`
  color: inherit;
`

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    height: calc(90vh - 100px);
  }
`

const SubTitle = styled.h2`
  font-size: 1.4em;
  font-weight: normal;
  margin-top: 0.5em;
  line-height: 30px;
  color: #4f4f4f;
  opacity: 0.75;
`

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 1.5em;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`

const Icons = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 2em;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 3em;
  }
`

const IconLabel = styled.p`
  margin-top: 0.2em;
  font-size: 16px;
  color: #4f4f4f;
`

const IconWrapper = styled.div`
  margin: 0 1em;

  @media (max-width: 1024px) {
    min-width: 50%;
    width: 50%;
    margin: 1em 0;
  }
`
