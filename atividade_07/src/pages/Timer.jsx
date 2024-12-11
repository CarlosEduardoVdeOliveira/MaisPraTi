import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Pause, Square, Play } from "lucide-react";
import { Container } from "../components/Container";

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Este useEffect é responsável por iniciar um intervalo que atualiza o número de segundos
    // a cada 1000ms (1 segundo) quando a variável `isRunning` está verdadeira.
    // O intervalo incrementa o estado `seconds` em 1 a cada execução.
    if (!isRunning) return; // Se `isRunning` for falso, o efeito não executa.
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1); // Incrementa o contador de segundos.
    }, 1000);

    // Retorna uma função de limpeza que é executada quando o componente é desmontado
    // ou `isRunning` muda para falso. Essa limpeza garante que o intervalo seja encerrado,
    // evitando comportamento inesperado ou vazamentos de memória.
    return () => clearInterval(interval);
  }, [isRunning]); // Este efeito depende de `isRunning`. Será reexecutado sempre que o valor de `isRunning` mudar.

  useEffect(() => {
    // Este useEffect monitora as mudanças nos estados `seconds` e `minutes`.
    // Quando `seconds` atinge 60, ele reseta os segundos para 0 e incrementa o estado `minutes` em 1.
    if (seconds === 60) {
      setMinutes((prev) => prev + 1); // Incrementa o contador de minutos.
      setSeconds(0); // Reseta os segundos.
    }

    // Quando `minutes` atinge 60, ele reseta os minutos para 0 e incrementa o estado `hours` em 1.
    if (minutes === 60) {
      setHours((prev) => prev + 1); // Incrementa o contador de horas.
      setMinutes(0); // Reseta os minutos.
    }
  }, [seconds, minutes]); // Este efeito depende de `seconds` e `minutes`. Será executado toda vez que qualquer um desses valores mudar.

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <Container>
      <div className="flex items-center justify-center gap-1 text-center mb-6 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50">
        <div id="hours" className="text-xl font-bold">
          {hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xl font-bold">:</div>
        <div id="minutes" className="text-xl font-bold">
          {minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xl font-bold">:</div>
        <div id="seconds" className="text-xl font-bold">
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleStart}>
          {isRunning ? <Pause /> : <Play />}
        </Button>
        <Button onClick={handleReset}>
          <Square />
        </Button>
      </div>
    </Container>
  );
}
