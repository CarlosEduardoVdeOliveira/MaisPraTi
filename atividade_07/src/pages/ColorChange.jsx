import { useEffect, useState } from "react";
import { generateColor } from "../utils/generateColor";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
export function ColorChange() {
  const [bgColor, setBgColor] = useState("rgb(36,36,36)");
  const handleColor = () => {
    setBgColor(generateColor());
  };
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <Container>
      <Button onClick={handleColor}>Trocar o Background Color</Button>
    </Container>
  );
}
