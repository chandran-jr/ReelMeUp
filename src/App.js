import React from 'react';
import './App.css';
import Video from './Video';


function App() {

  return (
    <div className="app">
    
   <h1 className="app__name">ReelMeUp</h1>

    <div className="app__videos">
      <Video videoURL="https://www.youtube.com/embed/TzKy1cMmvps"/>
    </div>

    </div>
  );
}

export default App;
