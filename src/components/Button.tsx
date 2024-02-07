import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}


export default function Button({variant = 'primary'}: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>Teste</ButtonContainer>
  )
}
