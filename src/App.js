import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';


function App() {

  const [videos,setVideos] = useState([]);

  useEffect(() =>{

    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    })

  },[]);

  return (
    <div className="app">
    
   <h1 className="app__name">ReelMeUp</h1>

    <div className="app__videos">

      {videos.map(({videoURL})=> (
        <Video videoURL={videoURL} />
      ))}
    </div>

    </div>
  );
}

export default App;
