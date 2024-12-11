import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Pause, Play, Square } from "lucide-react";
import { Container } from "../components/Container";
import alertSound from "../assets/audio/audio.wav";

export function TimerAlert() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const changeHours = (event) => setHours(Number(event.target.value));
  const changeMinutes = (event) => setMinutes(Number(event.target.value));
  const changeSeconds = (event) => setSeconds(Number(event.target.value));

  useEffect(() => {
    // Este useEffect controla o intervalo que decrementa o valor de `seconds` a cada 1 segundo.
    // Só entra em ação quando `isRunning` é verdadeiro.
    if (!isRunning) return; // Se `isRunning` for falso, não executa nada.

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1); // Decrementa o valor de `seconds` a cada 1 segundo.
    }, 1000);

    // Função de limpeza que garante o cancelamento do intervalo quando o componente é desmontado
    // ou quando `isRunning` muda para falso, evitando execuções desnecessárias.
    return () => clearInterval(interval);
  }, [isRunning]); // Este efeito é reexecutado sempre que `isRunning` mudar.

  useEffect(() => {
    // Este useEffect gerencia as transições de tempo (segundos, minutos e horas)
    // e lida com o comportamento ao término da contagem.

    if (seconds < 0) {
      // Se os segundos ficarem abaixo de 0 e não houver mais minutos ou horas restantes,
      // significa que a contagem chegou ao fim.
      if (minutes > 0 || hours > 0) return; // Aguarda ajuste pelos minutos ou horas restantes.

      setIsRunning(false); // Para a contagem.
      setSeconds(0); // Garante que `seconds` seja ajustado para 0.
      alert("Fim da contagem..."); // Exibe uma mensagem de fim.

      // Toca um som de alerta para notificar o usuário.
      const audio = new Audio(alertSound);
      audio.play();
    }

    // Quando `seconds` chega a 0, mas ainda há minutos restantes, decrementa os minutos
    // e redefine os segundos para 59.
    if (seconds === 0 && minutes > 0) {
      setMinutes((prev) => prev - 1); // Decrementa os minutos.
      setSeconds(59); // Reseta os segundos para 59.
    }

    // Quando `minutes` chega a 0, mas ainda há horas restantes, decrementa as horas
    // e redefine os minutos para 59.
    if (minutes === 0 && hours > 0) {
      setHours((prev) => prev - 1); // Decrementa as horas.
      setMinutes(59); // Reseta os minutos para 59.
    }
  }, [hours, minutes, seconds]); // Este efeito é acionado sempre que `hours`, `minutes` ou `seconds` mudam.

  const handleInit = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Por favor, defina um tempo para iniciar.");
      return;
    }
    setIsRunning(true);
  };

  const handleStart = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const renderOptions = () =>
    Array.from({ length: 60 }, (_, i) => (
      <option key={i} value={i}>
        {i.toString().padStart(2, "0")}
      </option>
    ));

  return (
    <Container>
      {isRunning ? (
        <>
          <div className="flex items-center justify-center gap-1 text-center mb-6 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50">
            <div className="text-xl font-bold">
              {hours.toString().padStart(2, "0")}
            </div>
            <div className="text-xl font-bold">:</div>
            <div className="text-xl font-bold">
              {minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xl font-bold">:</div>
            <div className="text-xl font-bold">
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
        </>
      ) : (
        <div className="flex items-center justify-center gap-1 text-center mb-6 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50">
          <select className="bg-transparent" onChange={changeHours}>
            {renderOptions()}
          </select>
          <div className="text-xl font-bold">:</div>
          <select className="bg-transparent" onChange={changeMinutes}>
            {renderOptions()}
          </select>
          <div className="text-xl font-bold">:</div>
          <select className="bg-transparent" onChange={changeSeconds}>
            {renderOptions()}
          </select>
          <Button onClick={handleInit}>Iniciar</Button>
        </div>
      )}
    </Container>
  );
}
