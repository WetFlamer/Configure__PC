import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Assembler from './Components/Assembler/Assembler';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
   <div>
   <Header/>
   <Assembler/>
   </div>
   </BrowserRouter>
  );
}

export default App;
