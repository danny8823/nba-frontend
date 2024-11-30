
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { Team } from './components/Team/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/team/:id' element = {<Team/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
