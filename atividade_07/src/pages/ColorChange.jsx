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
    // Este useEffect monitora as mudanças no estado `bgColor`
    // e aplica a cor atual como cor de fundo (`backgroundColor`) do body do documento.

    document.body.style.backgroundColor = bgColor; // Atualiza a cor de fundo do body.
  }, [bgColor]);
  // Este efeito será reexecutado sempre que o estado `bgColor` mudar.

  return (
    <Container>
      <Button onClick={handleColor}>Trocar o Background Color</Button>
    </Container>
  );
}
