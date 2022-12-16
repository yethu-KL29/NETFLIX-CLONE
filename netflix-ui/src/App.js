import {BrowserRouter,Routes,Route,Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import "../src/index.css"
import Player from './pages/Player';
import Main from './pages/Main';
function App() {

  const user=true;
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" element={<Main/>}/>}

        {!user && <Route path="/" element={<Signup/>}/>}

        <Route path="/movies" element={<Main type="movies"/>}/>

        <Route path="/series" element={<Main type="series"/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/player" element={<Player/>}/>
      </Routes>
    </BrowserRouter> 
    
    
   </div>
  );
}

export default App;
