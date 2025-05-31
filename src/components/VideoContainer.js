import React, { useEffect,useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { HocVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

const[videos, setVideos] = useState([]);

useEffect(() => {

    getVideo()

},[])


const getVideo = async() => {

    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
}

    return(
  
        <div className="flex flex-wrap">
        {videos[0] && <HocVideoCard info={videos[0]} />}              
        {videos.map(video=>     
        <Link key={video.id} to = {"/watch?v=" +video.id}><VideoCard info={video} />
        </Link>
        )}
        </div>
        
    )
}

export default VideoContainer;