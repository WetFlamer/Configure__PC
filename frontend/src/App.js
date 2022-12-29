import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
   <div>
   <Header/>
   </div>

   <Routes>
    <Route path='/about' element={<AboutUs/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
