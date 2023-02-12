import "./BeatsCard.css"

function BeatsCard({image,title,genre,bpm}){
    return (
        <div className="beatscard-div">
            <img className="beatscard-img" src={image}/>
            <h1 className="beatscard-title" >{title}</h1>
            <h2 className="beatscard-genre">{genre}</h2>
            <h2 className="beatscard-bpm">{bpm} BPM</h2>

        </div>

    );

}

export default BeatsCard;