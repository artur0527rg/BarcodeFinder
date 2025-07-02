// src/App.js
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScannerPage from './pages/ScannerPage';
import GroupsPage from './pages/GroupsPage';
import { GroupsProvider } from './context/GroupsContext';
import './App.css';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link to="/" className={`navbar__button${location.pathname === "/" ? "--active" : ""}`}>
        Scanner
      </Link>
      <Link to="/groups" className={`navbar__button${location.pathname === "/groups" ? "--active" : ""}`}>
        Groups
      </Link>
    </nav>
  );
}

function App() {
  return (
    <GroupsProvider>
      <Router>
        <div className="app-container">
          <header className='header'>
            <div className='container'>
            <h1 className='header__title'>BarcodeFinder</h1>
            </div>
          </header>
          
          <main>
            <Routes>
              <Route path="/" element={<ScannerPage />} />
              <Route path="/groups" element={<GroupsPage />} />
            </Routes>
          </main>
          
          <Navigation />
        </div>
      </Router>
    </GroupsProvider>
  );
}

export default App