import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebarMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";


const Watchpage = () => {

 //useSearchParams() to query string from the url   
const[searchParams] = useSearchParams();
console.log(searchParams.get("v"));

//to collapse sidebar in watchpage    
const dispatch = useDispatch();
useEffect(() => {
  dispatch(closeSidebarMenu())
},[])

return (
<div className="flex flex-col w-full">
  <div className="px-5 flex w-full">
    <div>
    <iframe 
    width="1000" 
    height="500" 
    src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player"
     frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" 
     allowFullScreen>
    </iframe>
    </div>
  <div className="w-full">
  <LiveChat/>
  </div>
  </div>
  <CommentsContainer/>
  </div>

)}   

export default Watchpage;