import { Container } from "./Container";
import { Input } from "./Input";
import { Button } from "./Button";

export function FormContact() {
  return (
    <Container>
      <div className="flex w-full gap-3  mb-5">
        <label htmlFor="name" className="text-xl">
          Nome:
        </label>
        <Input placeholder="Nome" id="name" />
      </div>
      <div className="flex  w-full gap-3 mb-5">
        <label htmlFor="email" className="text-xl">
          E-mail:
        </label>
        <Input placeholder="E-mail" id="email" type="email" />
      </div>
      <div className="flex  w-full gap-3 mb-5">
        <label htmlFor="msn" className="text-xl">
          Mensagem:
        </label>
        <textarea
          className="w-full text-gray-50 py-2 px-3 rounded-md outline-none border
      border-blue-200 mr-3 bg-gray-500 relative resize-none h-36"
          name="msn"
          id="msn"
        ></textarea>
      </div>
      <Button className="w-full" onClick={() => alert("Formulário fictício.")}>
        Enviar
      </Button>
    </Container>
  );
}
