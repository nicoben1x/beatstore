import "./Beats.css"
import BeatsCard from "./BeatsCard";
import song1 from "./audio/song1.mp3";
import song2 from "./audio/song2.mp3";
import song3 from "./audio/song3.mp3";
import { useState } from "react";

function Beats() {




    return (
        <div className="beats-div">
            <h1 className="beats-h1">Tracks</h1>
           
            <div className="beats-space">
                <BeatsCard
                    id={1}
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/8e3677e50f7ed74753d367ce5e3bb21d-384.png"
                    title="Oranga War"
                    genre="Trap"
                    bpm={120}
                    song={song1}
                   
                />

                <BeatsCard
                    id={2}
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/d70f6dc1c97191b06d091d11f2eb7444-384.jpg"
                    title="Peace Machine"
                    genre="Reggeaton"
                    bpm={90}
                    song={song2}
                 
                />

                <BeatsCard
                    id={3}
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/c4e6162ea5f06778552179b53edb4cca-384.jpg"
                    title="Big Bana"
                    genre="Rap"
                    bpm={85}
                    song={song3}
                    
                />

            </div>


        </div>
    );
}
export default Beats;