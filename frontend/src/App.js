import { Navigate, Route, Routes } from "react-router-dom";
import Assembler from "./Components/Assembler/Assembler";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Authorization/SignIn";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.users.token);

  if (!token) {
    return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to={"/configure"} />} />
        <Route path="/configure" element={<Assembler />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>)
  }
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to={"/configure"} />} />
        <Route path="/configure" element={<Assembler />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Navigate to={'/configure'}/>} />
      </Routes>
    </>
  );
}

export default App;
