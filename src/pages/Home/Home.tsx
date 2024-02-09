import { Play } from "@phosphor-icons/react";
import { CountdownContainer, FormContainer, HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" type="text" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="text" id="minutesAmount" />

        <span>minutos.</span>

      <CountdownContainer className="">
        <span>0</span>
        <span>0</span>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <button type="submit">
        <Play />
        Começar
      </button>
      </FormContainer>
    </HomeContainer>
  )
}
