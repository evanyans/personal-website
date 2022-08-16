import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    body: '#FFFFFF',
    title: '#0A0A0A',
    paragraph: '#686868',
    bar: 'drop-shadow(0 -10px 15px #E4E4E4)',
    line:'#BABABA solid 1px;',
}

export const darkTheme = {
    body: '#111111',
    title: '#EAEAEA',
    paragraph: '#B1B1B1',
    bar: 'drop-shadow(0 -10px 15px #000000)',
    line:'#242424 solid 1px;',
}

export const GlobalStyles = createGlobalStyle`
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
    }

    h2{
        color: ${props => props.theme.title};
        font-size:36px;
    }

    p{
        color: ${props => props.theme.paragraph};
        font-size:18px;
    }

    button{
        font-family: 'Roboto Mono', monospace;
        color: ${props => props.theme.title};
        font-size:18px;
    }

    .icon{
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