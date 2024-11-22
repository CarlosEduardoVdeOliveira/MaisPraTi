import { useState } from "react";

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
    <div className="flex gap-5 flex-col mx-0 my-auto">
      <h2 className="text-[32px] text-center text-gray-50">{counter}</h2>
      <div className="flex gap-4">
        <button
          className="hover:bg-gray-500 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50"
          onClick={handleIncrement}
        >
          Incrementar
        </button>
        <button
          className="hover:bg-gray-500 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50"
          onClick={handleDecrement}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
