/* import { useLocation } from "react-router-dom"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Counter } from "./pages/Counter";
import { ColorChange } from "./pages/ColorChange";
import { TaskList } from "./pages/TaskList";
import { Timer } from "./pages/Timer";
import { ListFilter } from "./pages/ListFilter";
import { Form } from "./pages/Form";
import { DataRequest } from "./pages/DataRequest";
import { Gallery } from "./pages/Gallery";
import { TimerAlert } from "./pages/TimerAlert";
import { Tabs } from "./pages/Tabs";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/Counter"} element={<Counter />} />
        <Route path={"/ColorChange"} element={<ColorChange />} />
        <Route path={"/TaskList"} element={<TaskList />} />
        <Route path={"/Timer"} element={<Timer />} />
        <Route path={"/ListFilter"} element={<ListFilter />} />
        <Route path={"/Form"} element={<Form />} />
        <Route path={"/DataRequest"} element={<DataRequest />} />
        <Route path={"/Gallery"} element={<Gallery />} />
        <Route path={"/TimerAlert"} element={<TimerAlert />} />
        <Route path={"/Tabs"} element={<Tabs />} />
      </Routes>
    </BrowserRouter>
  );
}
