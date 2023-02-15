import React from "react";
import { useLocation } from "react-router-dom";

function Detail(){

    const state=useLocation();
    console.log(state);
    
    return (
            <div>
                details;
            </div>
    );    
}

export default Detail;