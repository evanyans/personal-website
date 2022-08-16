import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper id="about">
        <Text>
            <Title>about me.</Title>
            <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br/><br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/><br/>
                Technologies I’ve worked with:
            </AboutText>
        </Text>
    </Wrapper>
  )
}

export default About

export const Wrapper = styled.div`
`

export const Text = styled.div`
    margin-top:220px;
`

export const Title = styled.h2`

`
export const AboutText = styled.p`
`
