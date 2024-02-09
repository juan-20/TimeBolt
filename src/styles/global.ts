import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    }
    svg{
        fill:  ${props => props.theme['gray-300']};;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 3px ${props => props.theme['green-500']};
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
`;