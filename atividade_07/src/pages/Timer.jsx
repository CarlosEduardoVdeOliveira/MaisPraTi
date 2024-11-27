import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Pause, Square, Play } from "lucide-react";

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
    if (minutes === 60) {
      setHours((prev) => prev + 1);
      setMinutes(0);
    }
  }, [seconds, minutes]);

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
    <div>
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
    </div>
  );
}
