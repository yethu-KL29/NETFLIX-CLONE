import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import "../src/index.css"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/netflix" element={<Netflix/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Signup/>}/>
    </Routes>
    </BrowserRouter> 
    
    
   </div>
  );
}

export default App;
