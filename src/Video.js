import React, { useRef, useState } from 'react';
import videofooter from "./VideoFooter";

import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSidebar' ;


function Video(){

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
    };
    return(
        <div className="video" > 
            <video className = "video__player"
            loop
            onClick={onVideoPress} 
            ref ={videoRef}

            src="http://techslides.com/demos/sample-videos/small.mp4" />


        <VideoFooter 
            channel = "Sanjay"
            description = "This is Nice Dance"
            song ="Music Video"
        />
        <VideoSideBar />
        </div>
    )
}
export default Video