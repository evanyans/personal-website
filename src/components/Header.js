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
                    <Description>currently seeking university admission and commission work</Description>
                    <Icons>
                        <a href="https://www.linkedin.com/in/yanevan" target="_blank"><FaLinkedin fontSize="22px" className="icon" /></a>
                        <a href="https://github.com/evanyans" target="_blank"><FaGithub fontSize="22px" className = "icon" /></a>
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
    margin-top:25%;
    @media only screen and (max-width: 600px) {
        padding-top:90px;
    }
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
    @media only screen and (max-width: 600px) {
            font-size:16px;
    }
`

export const Icons = styled.div`
    margin-top:71px;
    margin-left:-10px;
    display:flex;
    gap:34px;

    @media only screen and (max-width: 600px) {
            margin-top:50px;
    }
`

export const Triangle = styled.div`
    text-align:center;
    margin-top:15%;
`