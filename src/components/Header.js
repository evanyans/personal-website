import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'

const Header = () => {
    return (
        <>
            <Wrapper>
                <Body>
                    <Title>I'm <div className="gradient">Evan Yan</div> <br />Front-end developer</Title>
                    <Description>currently seeking university admission and 2023 summer internship.</Description>
                    <Icons>
                        <FaLinkedin fontSize="22px" className="icon" />
                        <FaGithub fontSize="22px" className = "icon" />
                    </Icons>
                </Body>
            </Wrapper>
            <Triangle><VscTriangleDown className = "icon" fontSize="25px" /></Triangle>
        </>
    )
}

export default Header

export const Wrapper = styled.div`
    max-width:1100px;
    margin-left:auto;
    margin-right:auto;
`

export const Body = styled.div`
    margin-top:30%;
`

export const Title = styled.h1`
    margin-bottom:1rem;

    .gradient{
        display:inline-block;
        background-image: linear-gradient(to right, #0F7EF0, #EF74C7, #1AE724, #42B1D9);
        -webkit-background-clip: text; 
        background-clip: text; 
        color: transparent;
        background-size: 300%;
        background-position: -100%;  
        animation: animatedText 5s infinite alternate-reverse;
}

@keyframes animatedText{
  to{
    background-position: 100%; 
  }
    }
`
export const Description = styled.p`
    font-size:20px;
`

export const Icons = styled.div`
    margin-top:71px;
    display:flex;
    gap:34px;
`

export const Triangle = styled.div`
    text-align:center;
    margin-top:15%;
`