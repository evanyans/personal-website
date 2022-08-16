import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../components/themes.js"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar.js"
import Header from "../components/Header.js"
import About from "../components/About.js"

const IndexPage = () => {

  const [theme, setTheme] = useState("dark");

  const themeToggle = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Helmet>
        <title>Evan Yan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar themeToggle={themeToggle} />
      <Header/>
      <Layout>
        <About/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Layout = styled.div`
  max-width:900px;
  margin-left:auto;
  margin-right:auto;
`