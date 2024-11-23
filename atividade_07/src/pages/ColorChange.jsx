import { useEffect, useState } from "react";
import { generateColor } from "../utils/generateColor";
export function ColorChange() {
  const [bgColor, setBgColor] = useState("rgb(36,36,36)");
  const handleColor = () => {
    setBgColor(generateColor());
  };
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div>
      <button
        className="hover:bg-gray-500 rounded-md p-2 border border-blue-300 bg-gray-600 text-gray-50"
        onClick={handleColor}
      >
        Trocar o Background Color
      </button>
    </div>
  );
}
