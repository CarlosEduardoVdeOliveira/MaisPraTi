import { useEffect, useState } from "react";
import { generateColor } from "../utils/generateColor";
import { Button } from "../components/Button";
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
      <Button onClick={handleColor}>Trocar o Background Color</Button>
    </div>
  );
}
