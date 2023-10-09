import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import AddCar from './pages/AddCar';
import SavedCars from './pages/SavedCars';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/auth" element ={<Auth/>} />
          <Route path="/add-car" element ={<AddCar/>} />
          <Route path="/saved-cars" element ={<SavedCars/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
