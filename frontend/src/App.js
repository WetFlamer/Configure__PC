import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Assembler from "./Components/Assembler/Assembler";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Authorization/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to={"/configure"} />} />
        <Route path="/configure" element={<Assembler />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
