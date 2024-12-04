import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SquareArrowLeft } from "lucide-react";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogger, setIsLogger] = useState(false);

  const changeInputName = (event) => setName(event.target.value);
  const changeInputEmail = (event) => setEmail(event.target.value);
  const changeInputPassword = (event) => setPassword(event.target.value);

  const showErrorToast = (msg) => toast.error(msg);
  const showSuccessToast = (msg) => toast.success(msg);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      showErrorToast("Preencha todos os campos.");
      throw new Error("Erro ao enviar");
    }
    showSuccessToast("Sucesso, ao logar");
    setIsLogger(true);
  };
  const handleLogout = () => {
    setIsLogger(false);
  };
  return (
    <>
      {isLogger ? (
        <div className="w-full p-6 flex flex-col items-center justify-center">
          <p className="flex gap-5">
            <span>
              Seja bem-vindo(a),{" "}
              <span className="text-green-800 font-bold">{name} </span>
            </span>
            <button
              onClick={handleLogout}
              title="Logout"
              className="border-none bg-transparent text-blue-200 hover:text-blue-400"
            >
              <SquareArrowLeft />
            </button>
          </p>
        </div>
      ) : (
        <div className="w-full p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl w-full flex flex-col gap-4"
          >
            <div className="flex justify-center items-center gap-4 w-full">
              <label htmlFor="name" className="text-xl">
                Nome:
              </label>
              <Input
                onChange={(event) => changeInputName(event)}
                id="name"
                placeholder="Nome"
              />
            </div>
            <div className="flex justify-between items-center gap-4 w-full">
              <label htmlFor="email" className="text-xl w-[65px]">
                E-mail:
              </label>
              <Input
                onChange={(event) => changeInputEmail(event)}
                id="email"
                type="email"
                placeholder="exemplo@email.com"
              />
            </div>
            <div className="flex justify-center items-center gap-4 w-full">
              <label htmlFor="password" className="text-xl">
                Senha:
              </label>
              <Input
                onChange={(event) => changeInputPassword(event)}
                id="password"
                type="password"
                placeholder="Senha"
              />
            </div>
            <Button>Cadastrar</Button>
          </form>
          <ToastContainer />
        </div>
      )}
    </>
  );
}
