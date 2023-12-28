import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import GitHubProjects from './components/GitHubProjects';
// import components

function App() {
  return (
    <div>
      <LandingPage/>
      <GitHubProjects/>
      <Footer/>
    </div>
  );
}

export default App;
