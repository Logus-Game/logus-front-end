import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Header from './components/Header';
import Login from './pages/Login';
import Quests from './pages/Quests';
import Footer from './components/Footer';
import SoonPage from './pages/SoonPage';
import Account from './pages/Account';
import Players from './pages/Players';
import Explore from './pages/Explore';
import Bank from './pages/Bank';
import AdminQuests from './pages/AdminQuests';
import SubmissionsPage from './pages/SubmissionsPage';

function App() {
  return (<Router>
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/quests' element={<Quests/>}/>
          <Route path='/chat' element={<SoonPage/>}/>
          <Route path='/notifications' element={<SoonPage/>}/>
          {/* <Route path='/explore' element={<Explore/>}/> */}
          <Route path='/statistcs' element={<SoonPage/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/admin/account' element={<Account/>}/>
          <Route path='/admin/players' element={<Players/>}/>
          <Route path='/admin/bank' element={<Bank/>}/>
          <Route path='/admin/submissionsPage' element={<SubmissionsPage/>}/>
          <Route path='/admin/quests' element={<AdminQuests/>}/>
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
