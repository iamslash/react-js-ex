import React from "react";

function Controls({ audio }) {
    
    const handlePlay = () => {
        audio.current.play();
    }

    const handlePause = () => {
        audio.current.pause();
    }

    return (
        <>
            <button onClick={handlePlay}>재생</button>
            <button onClick={handlePause}>중지</button>
        </>
    );
}

export default Controls;
