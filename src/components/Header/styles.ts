import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid ${( props ) => props.theme["gray-700"]};

    nav{
        display: flex;
        gap: 0.5rem;
    }

    img{
        width: 3rem;
        height: 3rem;
    }

    a{
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme["gray-100"]};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover{
            border-bottom: 3px solid ${(props) => props.theme["green-500"]};
        }

        &.active{
            color: 3px solid ${(props) => props.theme["green-500"]};
        }

    }
`;  