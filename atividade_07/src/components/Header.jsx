import { ArrowLeft } from "lucide-react";
import "../styles/reactLogo.css";
import ReactLogo from "../assets/react.svg";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  return (
    <header className="w-full p-4 mb-4 bg-gray-600 border-b border-purple-500">
      {location.pathname !== "/" ? (
        <div className="w-full flex items-center justify-between">
          <div className="w-full">
            <Link
              to="/"
              className="w-6 h-6 justify-self-start text-blue-200 hover:text-blue-300/75"
            >
              <ArrowLeft size={"24px"} />
            </Link>
          </div>
          <div className="w-full">
            <img className="logo react" src={ReactLogo} alt="logo react" />
          </div>
        </div>
      ) : (
        <h1 className="flex justify-center gap-2 text-2xl text-center font-extrabold text-blue-200">
          <span>Atividades React</span>{" "}
          <img className="logo react" src={ReactLogo} alt="logo react" />
        </h1>
      )}
    </header>
  );
}
