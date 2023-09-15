// App.js
import { BrowserRoute as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Rockets} />
        <Route path="about" element={Missions} />
        <Route path="profile" element={MyProfile} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
