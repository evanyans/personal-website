import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper id="about">
      <Text>
        <Title>about me.</Title>
        <AboutText>
          Hello, my name is Evan. I enjoy building high-quality and intuitive web applications.
          Currently I'm working on improving my skills as a developer through personal projects and online courses.
          <br /><br />
          I like to spend my free time binge-watching shows, learning new technologies, or working on my roguelike cooking game, <a className="link" href="https://twitter.com/okeyevan" target="_blank">Mikelin</a>.
          <br /><br />
          Technologies I’ve worked with:
        </AboutText>
        <Technologies>
        <ul>
          <li><span>Javascript</span></li>
          <li><span>Java</span></li>
          <li><span>C++</span></li>
        </ul>
        <ul>
          <li><span>Typescript</span></li>
          <li><span>React</span></li>
          <li><span>Godot Engine</span></li>
        </ul>
        </Technologies>
      </Text>
      <Photo><Circle></Circle></Photo>
    </Wrapper>
  )
}

export default About

export const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:80px;
  @media only screen and (max-width: 600px) {
      flex-direction:column;
    }
`

export const Text = styled.div`
  margin-right:40px;
`

export const Title = styled.h2`

`
export const AboutText = styled.p`
  .link{
    font-weight:400;
    color:#41FFEE;
    position: relative;
    text-decoration:none;
  }
  .link:after{

    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #41FFEE;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .link:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  
`

export const Technologies = styled.div`
  display:flex;
  flex-direction:row;
  gap:4rem;
  font-size:14px;
  margin-top:-10px;
  padding-left:18px;
  ul{
    padding:0;
    list-style-type: circle;
    line-height:1.5rem;

  }
  li {
    color:#41FFEE;
  }

  
`

export const Photo = styled.div`
display:none;
  @media only screen and (max-width: 600px) {
      text-align:center;
      justify-content:center;
      align-self:center;
    }
`
export const Circle = styled.div`
  margin-top:113px;
  height: 318px;
  width:318px;
  background-color: #fff;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
      margin-top:30px;
      height:250px;
      width:250px;
    }
`

