import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_ENGINE_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

    const toggleDispatch = useDispatch()
    const toggleHandler = () => {
        toggleDispatch(toggleSidebarMenu())
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

     /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

    /**
     * debouncing:
     * key - i
     * - render the component
     * - useEffect();
     * start timer => make api call after 200 ms
     * 
     * key - ip
     * - destroy the component(useEffect return method)
     * re-render the component
     * useEffect()start => make an api call after 200ms
     */

    useEffect(() => {

       const timer = setTimeout(() => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestion()
        }
    }, 200)

    return() => {
        clearTimeout(timer)
       }      
    }, [searchQuery])

   const getSearchSuggestion = async() => {

    console.log("API CALL - " +searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_ENGINE_API +searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    dispatch(
        cacheResults({
            [searchQuery]: json[1]
        }),
    )
   }

    return(

       <div className="grid grid-flow-col p-2 m-2 shadow-lg">
       <div className="flex col-span-1">
       <img  onClick={() => toggleHandler()} className="h-8 cursor-pointer" alt="hamburger-btn" src="data:image/jpeg;base64,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"
        />
       <a href="/">    
       <img className="h-8 mx-5" alt="youtube-icon" src="https://as2.ftcdn.net/v2/jpg/07/32/01/31/1000_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"/>
       </a>
      </div>

      <div className="col-span-10 static">
      <div>
      <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}/>
      <button className="border border-gray-600 p-2 rounded-r-full">🔎</button>
      </div>
    {showSuggestions && <div className="absolute bg-white w-lg px-2 py-2 shadow-lg rounded-lg border-gray-100">
     <ul>
     {suggestions.map(item => <li className="py-2 shadow-xs hover:bg-gray-100">🔎 {item}</li>)}   
     </ul>
     </div>}
      </div>
      <div className="col-span-1">
      <img className="h-8" alt="user-icon" src="data:image/png;base64,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"/>
      </div>
        </div>
       
    )
}

export default Header;