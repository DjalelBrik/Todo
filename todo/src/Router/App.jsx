import { Routes, Route } from "react-router-dom";
import Home from "../Ui/Pages/Home";
import Statistics from "../Ui/Pages/Statistics";
export default function App(){

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}

