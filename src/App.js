import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
