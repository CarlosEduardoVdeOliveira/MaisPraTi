import { useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    if (counter <= 0) {
      return alert("O contador não pode ser menor que zero.");
    }
    setCounter(counter - 1);
  }
  return (
    <Container>
      <h2 className="text-[32px] text-center text-gray-50">{counter}</h2>
      <div className="flex gap-4">
        <Button onClick={handleIncrement}>Incrementar</Button>
        <Button onClick={handleDecrement}>Decrementar</Button>
      </div>
    </Container>
  );
}
