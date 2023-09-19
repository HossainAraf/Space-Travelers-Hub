import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Rockets from './components/Rockets';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>

        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
