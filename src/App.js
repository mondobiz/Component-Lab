import React from 'react';
import './App.css';


import GameBoard from './components/GameBoard';
import ColorPicker from './components/ColorPicker';
import GameTimer from './components/GameTimer';
import NewGameButton from './components/NewGameButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">React Mastermind</header>
      <GameBoard />
      <ColorPicker />
      <GameTimer />
      <NewGameButton />
      <Footer />
    </div>
  );
}

export default App;
