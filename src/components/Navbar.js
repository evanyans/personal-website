import React, {useEffect} from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Toggle from 'react-toggle'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import "react-toggle/style.css"

const Navbar = ({ themeToggle }) => {

    
    useEffect(() => {
        const body = document.body;
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }
    
            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        });
      }, []);




    return (
        <Nav>
            <Wrapper>
                <a href=".">
                    <StaticImage
                        src="../images/logoey.png"
                        alt="logo"
                        placeholder="blurred"
                        layout="constrained"
                        width={48}
                        height={52}
                        grayscale={true}
                    /></a>
                <Menu>
                    <a href="#about"><NavLink>About</NavLink></a>
                    <a href="#projects"><NavLink>Projects</NavLink></a>
                    <a href="#contact"><NavLink>Contact</NavLink></a>
                    <label>
                        <Toggle
                            icons={{
                                checked: <BsSunFill fontSize="12px"/>,
                                unchecked: < BsFillMoonFill fontSize="12px"/>,
                            }}
                            onChange={themeToggle} />
                    </label>
                </Menu>

            </Wrapper>
        </Nav>
    )
}

export default Navbar

export const Nav = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 999;
`

export const Wrapper = styled.header`
    padding:20px 44px;
    display:flex;
    justify-content:space-between;
    transition: transform 0.2s ease-in-out;
    transition: filter 0.2s ease-in-out;
`

export const Menu = styled.div`
    display:flex;
    flex-direction:row;
    label{
        margin-top:13px;
        margin-left:13px;
    }
`

export const NavLink = styled.button`
    border:none;
    background:none;
    padding: 12px 15px;
    border-radius:8px;

    &:hover{
        background:#2E2E2E;
        color:#EAEAEA;
    }

`

export const Switch = styled.button`

`