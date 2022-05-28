import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FilterCars from "./pages/FilterCars"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='cars' element={<FilterCars/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
