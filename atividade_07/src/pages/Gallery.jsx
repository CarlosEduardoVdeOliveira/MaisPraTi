import { useState } from "react";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
import { Modal } from "../components/Modal";
import { images } from "../data";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "../components/Button";

export function Gallery() {
  const [position, setPosition] = useState(0);

  const handleOpen = (event) => {
    document.getElementById("modal").style.display = "block";
    const id = event.target.id;
    setPosition(id - 1);
  };

  const handlePreviews = () => {
    if (position === 0) {
      setPosition(images.length - 1);
    }
    setPosition((prev) => prev - 1);
  };
  const handleNext = () => {
    if (position === images.length - 1) {
      setPosition(0);
    }
    setPosition((prev) => prev + 1);
  };

  const handleClose = () => {
    document.getElementById("modal").style.display = "none";
  };
  return (
    <Container>
      <ul className="flex flex-wrap items-center justify-center gap-4 pb-5 w-full">
        {images.map((img) => (
          <li key={img.id}>
            <div className="w-40 h-40">
              <Image
                onClick={(event) => handleOpen(event)}
                id={img.id}
                src={img.url}
                alt={img.description}
              />
            </div>
          </li>
        ))}
      </ul>
      <Modal id="modal">
        <div className="w-full h-full relative p-5 flex justify-center items-center">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 cursor-pointer text-gray-50 hover:opacity-60"
          >
            <X />
          </button>
          <div className="w-[500px] h-[500px]">
            <Image
              key={images[position].id}
              src={images[position].url}
              alt={images[position].description}
            />
          </div>
          <Button onClick={handlePreviews} className="absolute left-0 top-1/2">
            <ChevronLeft />
          </Button>
          <Button onClick={handleNext} className="absolute right-0 top-1/2">
            <ChevronRight />
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
