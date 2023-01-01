import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Assembler from "./Components/Assembler/Assembler";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Authorization/SignIn";
import { useSelector } from "react-redux";
import Assembly from "./Components/Assembly/Assembly";
import Cart from "./Components/Cart/Cart";
import { Fullstory } from "./Components/Assembly/Product/Fullstory";

function App() {
  const token = useSelector((state) => state.users.token);


  if (!token) {
    return (
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to={"/configure"} />} >
          <Route path="configure" element={<Assembler />} />
          <Route path="assembly" element={<Assembly />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<SignIn />} />
          <Route path="assembly/:id" element={<Fullstory />} />
          <Route path="cart" element={<Navigate to={"/configure"} />} />
          </Route>
        </Routes>

        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />

      <Routes>
      <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate to={"/configure"} />} />
        <Route path="/configure" element={<Assembler />} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="assembly/:id" element={<Fullstory />} />
        <Route path="/login" element={<Navigate to={"/configure"} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
