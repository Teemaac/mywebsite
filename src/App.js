import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import GitHubProjects from './components/GitHubProjects';
// ... other imports

function App() {
  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<GitHubProjects />} />
        {/* ... other routes ... */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
