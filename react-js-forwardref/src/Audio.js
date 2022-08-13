import React, { forwardRef } from "react";

const music = "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/11/file_example_MP3_700KB.mp3";

function Audio(prop, ref) {
    return (
        <figure>
            <figcaption>Eyes on You (String) - Network 415:</figcaption>
            <audio src={music} ref={ref}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </figure>
    );
}

export default forwardRef(Audio);
