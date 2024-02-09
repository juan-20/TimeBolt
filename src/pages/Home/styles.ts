import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    
        label {
        font-size: 1.5rem;
        }
    
        input {
        width: 100%;
        padding: 1rem;
        border: 0;
        border-radius: 0.5rem;
        background: ${(props) => props.theme["gray-800"]};
        color: ${(props) => props.theme["gray-300"]};
        }
    
        span {
        font-size: 1.5rem;
        }
    
        div {
        display: flex;
        gap: 0.5rem;
        font-size: 2rem;
        }
    
        button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border: 0;
        border-radius: 0.5rem;
        background: ${(props) => props.theme["green-500"]};
        color: ${(props) => props.theme["gray-900"]};
        font-size: 1.5rem;
        cursor: pointer;
        }
    }
    `;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    `;
export const CountdownContainer = styled.div``;
