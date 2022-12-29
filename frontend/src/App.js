import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Assembler from "./Components/Assembler/Assembler";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Authorization/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/configure" element={<Assembler />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
