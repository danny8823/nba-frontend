
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { Team } from './components/Team/Team';
import Player from './components/Player/Player';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/team/:id' element = {<Team/>}/>
        <Route path = '/player/:playerId' element = {<Player/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
