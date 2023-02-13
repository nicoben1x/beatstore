import "./Banner.css";
import banner from"./assets/banner.jpg";
import React from 'react';
import Typewriter from "typewriter-effect";


function Banner(){

  


    return(
        <div className="banner-div">
            <img className="banner-img" src={banner}/>
            
            <div className="banner-h1">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Crea una gran canción, con un gran beat...")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Aire Beatz")
       .start();
       }}
       />
    </div>
             
        </div>
    );


 




}

export default Banner;