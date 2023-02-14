import "./BeatsCard.css"
import playlogo from "./assets/play.png"
import pauselogo from "./assets/pause.png"
import { useRef } from 'react';


function BeatsCard({image,title,genre,bpm,song}){

    const audioRef = useRef(null);
    const playRef = useRef(null);
    const pauseRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play();
            playRef.current.classList.add("nonedis");
            pauseRef.current.classList.remove("nonedis");

          } else {
            audioRef.current.pause();
            playRef.current.classList.remove("nonedis");
            pauseRef.current.classList.add("nonedis");
          }
        }
      };



    return (
        <div className="beatscard-div">
            <img className="beatscard-img" src={image}/>
            <img ref={playRef} onClick={handlePlay} className="beatscard-playimg img-play" src={playlogo}/>
            <img ref={pauseRef} onClick={handlePlay} className="beatscard-playimg img-pause nonedis" src={pauselogo}/>
            <audio ref={audioRef} className="audioSong" controls>
                <source
                src={song}
                type="audio/mpeg"
                />
                Tu navegador no soporta este audio
            </audio>
            <h1 className="beatscard-title" >{title}</h1>
            <h2 className="beatscard-genre">{genre} - {bpm} BPM</h2>

        </div>

    );

  



}

export default BeatsCard;