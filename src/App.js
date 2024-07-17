import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Login from './pages/Login';
import Quests from './pages/Quests';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/quests' element={<Quests/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
