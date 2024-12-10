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
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds < 0) {
      if (minutes > 0 || hours > 0) return;

      setIsRunning(false);
      setSeconds(0);
      alert("Fim da contagem...");
      const audio = new Audio(alertSound);
      audio.play();
    }

    if (seconds === 0 && minutes > 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    }

    if (minutes === 0 && hours > 0) {
      setHours((prev) => prev - 1);
      setMinutes(59);
    }
  }, [hours, minutes, seconds]);

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
