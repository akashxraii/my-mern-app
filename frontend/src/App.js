import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Moved logic here to access route location
function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/signup'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
