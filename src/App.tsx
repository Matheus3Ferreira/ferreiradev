import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import "./style/app.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
