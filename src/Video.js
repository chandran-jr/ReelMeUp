import React from 'react';
import './Video.css';

function Video({videoURL}) {

    return (
        <div className="video">
        <iframe className="video__player" loop width="100%" height="100%" src={videoURL} title="Reels" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default Video
