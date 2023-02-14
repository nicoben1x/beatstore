import "./BeatsCard.css"
import playlogo from "./assets/play.png"
import pauselogo from "./assets/pause.png"
import { useRef } from 'react';


function BeatsCard({ id, image, title, genre, bpm, song, onButtonClick }) {

    const playRef = useRef(null);
    const pauseRef = useRef(null);
    const audioRef = useRef(null);


    function clickPlay() {


        let audioElements = document.querySelectorAll('.audioSongg');
        let imagePlayers = document.querySelectorAll('.img-play');
        let imagePauses = document.querySelectorAll('.img-pause');

        audioElements.forEach(function (audio) {
            if (!audio.paused) {
                audio.pause(); // Detener la reproducción del audio
            }
        });

        imagePlayers.forEach(function (image) {
            image.classList.remove("nonedis")
        });
        imagePauses.forEach(function (image) {
            image.classList.add("nonedis")
        });



        audioRef.current.play();
        playRef.current.classList.add("nonedis");
        pauseRef.current.classList.remove("nonedis");
    }

    function clickPause() {
        audioRef.current.pause();

        playRef.current.classList.remove("nonedis");
        pauseRef.current.classList.add("nonedis");
    }






    return (
        <div className="beatscard-div">
            <img className="beatscard-img" src={image} />
            <img ref={playRef} onClick={() => clickPlay()} className="beatscard-playimg img-play" src={playlogo} />
            <img ref={pauseRef} onClick={() => clickPause()} className="beatscard-playimg img-pause nonedis" src={pauselogo} />
            <h1 className="beatscard-title" >{title}</h1>
            <h2 className="beatscard-genre">{genre} - {bpm} BPM</h2>
            <audio ref={audioRef} className="audioSongg" controls>
                <source className="audioSource"
                    src={song}
                    type="audio/mpeg"
                />
                Tu navegador no soporta este audio
            </audio>

        </div>

    );





}

export default BeatsCard;