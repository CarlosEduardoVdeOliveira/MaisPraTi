import { useState } from "react";
import { Container } from "../components/Container";
import { About } from "../components/About";
import { FormContact } from "../components/FormContact";

export function Tabs() {
  const [tabs, setTabs] = useState("contato");

  return (
    <Container>
      <div className="flex gap-4">
        <div
          onClick={() => setTabs("sobre")}
          className={`${
            tabs === "sobre" ? "bg-yellow-500 font-bold" : "bg-transparent"
          } border border-blue-200 text-xl cursor-pointer hover:bg-yellow-400 p-2 rounded-t-xl rounded-tr-xl mb-5`}
        >
          Sobre
        </div>
        <div
          onClick={() => setTabs("contato")}
          className={`${
            tabs === "contato" ? "bg-yellow-500 font-bold" : "bg-transparent"
          } border border-blue-200 text-xl cursor-pointer hover:bg-yellow-400 p-2 rounded-t-xl rounded-tr-xl mb-5`}
        >
          Contato
        </div>
      </div>
      {tabs === "sobre" ? <About /> : tabs === "contato" && <FormContact />}
    </Container>
  );
}
