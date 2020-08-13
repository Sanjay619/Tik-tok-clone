import React, { useRef, useState } from 'react';
import videofooter from "./VideoFooter";

import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSidebar' ;


function Video({
url, 
channel,
description,
song,
likes,
messages,
shares} ){

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

            src={url} />


        <VideoFooter 
            channel = {channel}
            description = {description}
            song = {song}
        />
        <VideoSideBar likes = {likes} messages = {messages} shares = {shares}  />
        </div>
    )
}
export default Video