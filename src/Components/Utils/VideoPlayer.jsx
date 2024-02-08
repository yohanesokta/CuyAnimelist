"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height: "250"
    }
    const [isOpen, setIsOpen] = useState(true)
    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }
    const Player = () => {
        return (
            <div className="fixed bottom-8 right-8">
                <button onClick={handleCloseButton} className="bg-main-primary float-right mb-1 py-1 text-main-white rounded px-3 ">X</button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => {
                        event.target.pauseVideo();
                    }}
                    opts={option}
                    onError={() => { alert('Video Is Broken') }}
                />
            </div>)
    }
    const ButtonHide = () => {
        return (<>
            <button className="fixed bottom-5 right-5 w-32 rounded bg-main-primary text-main-white" onClick={handleCloseButton}>
                Lihat Trailer
            </button>
        </>)
    }
    return (isOpen) ? <Player /> : <ButtonHide />
};

export default VideoPlayer;