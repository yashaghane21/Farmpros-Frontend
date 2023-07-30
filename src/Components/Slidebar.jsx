

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import r from "../assets/41.png"

const Slidear = () => {
   

    return (
        <Slide >
           
            <div className="each-slide-effect bg-slate-950">
            <img  className="p-5 h-[350px] w-[400px] "src={r} /> 
            </div> 
            <div className="each-slide-effect bg-slate-950">
           <img  className="h-[350px] p-5 w-[400px] "src={r} /> 
            </div>
            <div className="each-slide-effect bg-slate-950">
           <img  className="h-[350px] p-5 w-[400px] "src={r} /> 
            </div>
        </Slide>
    );
};

export default Slidear
