import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    body: '#FFFFFF',
    title: '#0A0A0A',
    paragraph: '#686868',
    bar: 'drop-shadow(0 -10px 15px #E4E4E4)',
    line:'#BABABA solid 1px;',
    project:'#FAFAFA',
    projectOutline:'#F0F0F0',   
    projectHover:'#F2FCFF',
}

export const darkTheme = {
    body: '#111111',
    title: '#EAEAEA',
    paragraph: '#B1B1B1',
    bar: 'drop-shadow(0 -10px 15px #000000)',
    line:'#242424 solid 1px;',
    project:'#191919',
    projectOutline:'#242424',
    projectHover:'#1E1E1E',
}

export const GlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }

    *{
        transition: all 0.2s ease-in-out;
    }
    body {
        background-color: ${props => props.theme.body};
        font-family: 'Roboto Mono', monospace;    
    }

    header{
        background-color:${props => props.theme.body};
        border-bottom:${props => props.theme.line};
    }

    h1{
        color: ${props => props.theme.title};
        font-size:56px;
        @media only screen and (max-width: 600px) {
            font-size:30px;
            padding-top:25px;
        }
    }

    h2{
        color: ${props => props.theme.title};
        font-size:36px;
        @media only screen and (max-width: 600px) {
            font-size:25px;
        }
    }

    p{
        color: ${props => props.theme.paragraph};
        font-size:18px;
        @media only screen and (max-width: 600px) {
            font-size:15px;
        }
    }

    button{
        font-family: 'Roboto Mono', monospace;
        color: ${props => props.theme.title};
        font-size:18px;
    }

    .icon{
        color: ${props => props.theme.title};
        padding:10px;
        border-radius:5px;
        transition:none;
        &:hover{
            transition:none;
            cursor:pointer;
            background:#2E2E2E;
            color:#EAEAEA;
        }
    }

    ul{
        color: ${props => props.theme.paragraph};
        li span{
            color:${props => props.theme.paragraph};
        }
    }

    .projects{
        background-color: ${props => props.theme.project};
        border: solid 1px ${props => props.theme.projectOutline};
        border-radius:6px;

        &:hover{
            cursor:pointer;
            background-color: ${props => props.theme.projectHover};
        }
    }

    label{
        color: ${props => props.theme.title};
        font-size:14px;
        font-weight:400;
    }

    input[type=text]{
        font-family: 'Roboto Mono', monospace;
        font-size:14px;
        background-color: ${props => props.theme.project};
        border: solid 1px ${props => props.theme.projectOutline};
        padding:10px 20px;
        border-radius:5px;

        color: ${props => props.theme.title};
    }
    input[type=email]{
        font-family: 'Roboto Mono', monospace;
        font-size:14px;
        background-color: ${props => props.theme.project};
        border: solid 1px ${props => props.theme.projectOutline};
        padding:10px 20px;
        border-radius:5px;

        color: ${props => props.theme.title};
    }

    input[type=submit]{
        margin-top:1rem;
        font-family: 'Roboto Mono', monospace;
        width:162px;
        font-size:16px;
        background-color:#EAEAEA;
        border:none;
        padding:10px;
        border-radius:3px;
        &:hover{
            cursor:pointer;
            color:#EAEAEA;
            background-color:#191919;
        }
    }

    textarea{
        font-family: 'Roboto Mono', monospace;
        font-size:14px;
        background-color: ${props => props.theme.project};
        border: solid 1px ${props => props.theme.projectOutline};
        padding:10px 20px;
        border-radius:5px;
        resize: none;
        color: ${props => props.theme.title};
    }

    /*Navbar Hide on Scroll*/
    .scroll-down {
	    header {
		    transform: translate3d(0, -100%, 0);
           
	    }
    }

    .scroll-up {
	    header {
		    filter: ${props => props.theme.bar};
	    }
    }

    .menu-is-open {
	    overflow: hidden;
	    header {
		    filter: none;
	    }
    }
`