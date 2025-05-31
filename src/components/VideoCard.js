const VideoCard = ({info}) => {

    console.log(info);
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet
    return(

    <div className="p-2 m-2 w-70 shadow-lg cursor-pointer">
    <img src={thumbnails.medium.url}/> 
     <ul>
     <li className="font-bold">{title}</li> 
     <li>{channelTitle}</li>
     <li>{statistics.likeCount}</li>  
     </ul>       
     </div>
    )
}

//High order Component
export const HocVideoCard = ({info}) => {

   return(
   
   <div className="p-1 m-1 border border-red">
   <VideoCard info = {info}/>
    </div>
   )

} 


export default VideoCard;