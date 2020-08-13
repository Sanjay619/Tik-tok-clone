import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import './VideoSidebar.css'

// this is completed code

function VideoSidebar({ likes , messages, shares } ) { 

    const [liked , setLike] = useState(false); 

    return (
        <div className = "videsidebar">
           <div className= "videosidebar__button">
                { liked ? (
                <FavoriteIcon 
                fontSize= "large"
                onClick= {e => setLike(false)}
                />
            
                ) : (
                    <FavoriteBorderIcon 
                    fontSize= "large"
                    onClick= {e => setLike(true)}
                    />
                )}
                <p>{liked ? likes + 1 : likes} </p>
           </div>
           <div className= "videosidebar__button">
                <MessageIcon     fontSize= "large" />
                <p>{messages}</p>
           </div>
           <div className= "videosidebar__button">
                <ShareIcon    fontSize= "large" />
                <p>{shares}</p>
           </div>


        </div>
    )
}

export default VideoSidebar