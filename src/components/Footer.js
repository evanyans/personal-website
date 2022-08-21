import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <Foot>
        <Wrapper>
            <Text>
                <div className="left">© Evan Yan 2022</div>
                <div className="center">Built & Designed by Evan Yan</div>
                <div className="right">
                    <a href="https://www.linkedin.com/in/yanevan" target="_blank" className="icon"><FaLinkedin size={15}/></a>
                    <a href="https://github.com/evanyans" target="_blank" className="icon"><FaGithub size={15} /></a>
                </div>
            </Text>
        </Wrapper>
        </Foot>
    )
}

export default Footer;

export const Foot = styled.div`
    margin-top:100px;
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
`

export const Wrapper = styled.div`
    background:none;
    height:25px;
    z-index:999;
    padding:5px;
`

export const Text = styled.div`
    text-align:center;
    color:#B1B1B1;
    font-size:12px;
    font-weight:400;
    display:flex;
    justify-content:space-between;
    .right{
        display:flex;
        gap:0.5rem;
        align-items: center;
        a{
            color:#B1B1B1;
            margin-right:10px;
        }
        .icon{
            padding:7px;
            padding-bottom:5px;
        }
        @media only screen and (max-width: 600px) {
            gap:0;
        }
    }

`

