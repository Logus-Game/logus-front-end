import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Header from './components/Header';
import Login from './pages/Login';
import Quests from './pages/Quests';
import Footer from './components/Footer';

function App() {
  return (<Router>
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/quests' element={<Quests/>}/>
        </Routes>
      
      <FooterWrapper/>
    </div>
    </Router>
  );
}
const FooterWrapper = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Footer /> : <div className="footer-login"></div>;
};
export default App;
