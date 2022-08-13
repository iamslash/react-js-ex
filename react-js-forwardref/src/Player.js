import React, { useRef } from "react";
import Audio from "./Audio";
import Controls from "./Controls";


function Player() {
    const audioRef = useRef(null);

    return (
        <>
            <Audio ref={audioRef} />
            <Controls audio={audioRef} />
        </>
    );  

}

export default Player;
