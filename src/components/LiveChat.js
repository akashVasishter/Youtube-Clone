import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

   useEffect(() => {
  
    const i = setInterval(() =>{
        //API polling
    console.log("API Polling");

    dispatch(
        addMessages({

            name: generateRandomName(),
            message: makeRandomMessage(20) +"🤩",
        })
    )
    },2000)
    
    return () => clearInterval(i)

   },[])

    return(
    <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 shadow-lg rounded-lg overflow-y-scroll flex flex-col-reverse">
   {
   chatMessages.map((c) => (
    <ChatMessage name={c.name} message={c.message} /> 
    ))
   }
    </div>
   
  <form className="w-full ml-2 p-2 border border-black"
    onSubmit={(e) => {
    e.preventDefault();

    dispatch(
        addMessages({
            name:"Akash",
            message: liveMessage,
        })
    )
    setLiveMessage("")

    }}>
    <input className="w-96 border border-black" type="text" value={liveMessage} 
    onChange={(e) => setLiveMessage(e.target.value)}/>
    <button className="px-2 mx-2 bg-green-100 cursor-pointer hover">Submit</button>
  </form>
    </>
    
    )
}

export default LiveChat;