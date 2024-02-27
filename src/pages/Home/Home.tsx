import { Play } from "@phosphor-icons/react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCount, TaskInput } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput id="task" list="tasksSuggestions" type="text" />
        <datalist id="tasksSuggestions">
          <option value="Estudar" />
          <option value="Trabalhar" />
          <option value="Exercitar" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput type="text" id="minutesAmount" step={5} min={5} max={60} />

        <span>minutos.</span>

      <CountdownContainer className="">
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <StartCount type="submit">
        <Play />
        Começar
      </StartCount>
      </FormContainer>
    </HomeContainer>
  )
}
