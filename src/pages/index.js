import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../components/themes.js"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar.js"
import Header from "../components/Header.js"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from './../components/Contact';
import Footer from "../components/Footer.js"

const IndexPage = () => {

  const [theme, setTheme] = useState("dark");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Helmet>
        <title>Evan Yan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar themeToggle={themeToggle} />
      <Margin>
        <Header />
        <Layout>
          <About />
          <Projects />
          <Contact />
        </Layout>
      </Margin>
      <Footer/>
    </ThemeProvider>
  )
}

export default IndexPage

export const Layout = styled.div`
  max-width:984px;
  margin-left:auto;
  margin-right:auto;
`

export const Margin = styled.div`
  margin-left:15px;
  margin-right:15px;
`