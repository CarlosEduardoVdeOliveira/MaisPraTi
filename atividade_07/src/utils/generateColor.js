const generateRGB = () => Math.floor(Math.random() * 256);
export function generateColor() {
  return `rgb(${generateRGB()}, ${generateRGB()}, ${generateRGB()})`;
}
