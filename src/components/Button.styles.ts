import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps  {
    variant: 'primary' | 'secondary';
}



export const ButtonContainer = styled.button<ButtonProps>`
    background: ${props => props.theme["green-500"]};
`;