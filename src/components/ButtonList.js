import React from "react";
import Buttons from "./Buttons";


const ButtonsList = () => {

    return (

        <div className="flex">
        <Buttons name="All"/>
        <Buttons name="Music"/>
        <Buttons name="News"/>
        <Buttons name="Podcasts"/>
        <Buttons name="Live"/>
        <Buttons name="Tech"/>
        </div>        
    )
}

export default ButtonsList;