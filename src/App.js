import "./styles.css";
import { Homepage, Choosepage, Gamepage } from "./Pages";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/choose" element={<Choosepage />} />
        <Route path="/game" element={<Gamepage />} />
      </Routes>
    </div>
  );
}
