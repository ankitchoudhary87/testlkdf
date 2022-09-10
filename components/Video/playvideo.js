import React from 'react';
function Playvideo(props) {
    //console.log("Play Video")
    return (
        <>
            <iframe width="95%" height="450" frameBorder="0"  allow="autoplay; encrypted-media" allowFullScreen src={`https://youtube.com/embed/${props.playingvideo}?autoplay=1`}></iframe>
        </>
    );
}
export default Playvideo;