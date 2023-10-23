import logo from './logo.svg';
import './App.css';
import './Welcome'
import Welcome from './Welcome';
import Greet from './Greet';
import Task from './Task';
import ButtonClick from './ButtonClick';
import NavBar from './Nav-bar';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Label from './Label';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';
function App() {
  return (
    <div className="App">
    
      {/* <h1> Hello World</h1>
      <Welcome name="Prasandh" id="3663"></Welcome>
      
      <Welcome name="Manoj"></Welcome>
      <Welcome name="Dinesh"></Welcome>
  <Greet name="Rohini">Hello World</Greet>  */}
  <BrowserRouter>
     <NavBar/>
    <Routes>
        <Route path='Product-page' element={<Product/>}></Route>
        <Route path='Login-page' element={<Login/>}></Route>
        <Route path='Task' element={<Task/>}></Route>
        <Route path='Greet' element={<Greet/>}></Route>
    </Routes>
  </BrowserRouter>
     <Controlled/>
    <Uncontrolled/>
    </div>
  );
}

export default App;
