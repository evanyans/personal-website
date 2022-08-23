import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { StaticImage } from "gatsby-plugin-image"
const Projects = () => {
  return (
    <Wrapper id="projects">
      <Text>projects.</Text>
      <List>
        <a href="https://vancouver-charity-games.vercel.app/" target="_blank">
          <Card className="projects">
            <Icon><StaticImage
                        src="../images/vcg.png"
                        placeholder="blurred"
                        width={100}
                        height={100}
                        quality={90}
                        style={{ borderRadius: '20px' }}
                    /></Icon>
            <Info>
              <Title>Vancouver Charity Games</Title>
              <Description>Complete front-end build for a youth led non-profit organization
                that provides esports opportunities while raising money for local causes.</Description>
              <Tech>React&nbsp; TypeScript&nbsp; styled-components</Tech>
              <Links>
              <a href="https://github.com/evanyans/vancouver-charity-games" target="_blank"><FaGithub fontSize={20} className="icon" /></a>
              <a href="https://vancouver-charity-games.vercel.app/" target="_blank"><FiExternalLink fontSize={20} className="icon" /></a>
              </Links>
            </Info>
          </Card>
        </a>
        <a href=".">
          <Card className="projects">
            <Icon className="portfolio"><StaticImage
                        src="../images/portfolio.png"
                        placeholder="blurred"
                        width={100}
                        height={100}
                        quality={90}
                        style={{ borderRadius: '20px' }}
                    /></Icon>
            <Info>
              <Title>Personal Website</Title>
              <Description>You viewing it right now.</Description>
              <Tech>Gatsby&nbsp; React&nbsp; Javascript&nbsp; styled-components</Tech>
              <Links>
              <a href="https://github.com/evanyans/personal-website" target="_blank"><FaGithub fontSize={20} className="icon" /></a>
              </Links>
            </Info>
          </Card>
        </a>        
      </List>
    </Wrapper>
  )
}

export default Projects

export const Wrapper = styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:column;
  text-align:center;
  margin-bottom:100px;
`

export const Text = styled.h2`
`

export const List = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
  a{
    text-decoration:none;
  }
`

export const Card = styled.div`
  max-width:984px;
  min-height:170px;
  padding:45px 40px;
  padding-bottom:30px;
  display:flex;
  flex-direction:row;
  gap:2rem;
  @media only screen and (max-width: 600px) {
      flex-direction:column;
      gap:1.5rem;
  }
  .portfolio{
    background-color:#1B1B1B;
  }
`

export const Icon = styled.div`
  width:100px;
  height:100px;
  background-color:white;
  border-radius:20px;
  flex-shrink: 0;

  margin-top:5px;


  @media only screen and (max-width: 600px) {
      width:80px;
      height:80px;
  }
`

export const Info = styled.div`
  text-align:left;
`

export const Title = styled.h2`
  margin-top:0;
  font-size:18px;
  @media only screen and (max-width: 600px) {
      font-size:16px;
  }
`

export const Description = styled.p`
  margin-top:0;
  font-size:16px;
  @media only screen and (max-width: 600px) {
      font-size:14px;
  }
`

export const Tech = styled.p`
  margin-top:10px;
  font-size:14px;
  @media only screen and (max-width: 600px) {
      font-size:12px;
  }
`

export const Links = styled.div`
  margin-left:-10px;
`