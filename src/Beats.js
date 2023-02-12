import "./Beats.css"
import BeatsCard from "./BeatsCard";
function Beats() {
    return (
        <div className="beats-div">
            <h1 className="beats-h1">Tracks</h1>
            <div className="beats-space">
                <BeatsCard
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/8e3677e50f7ed74753d367ce5e3bb21d-384.png"
                    title="Oranga War"
                    genre="Trap"
                    bpm={120}
                />

                <BeatsCard
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/d70f6dc1c97191b06d091d11f2eb7444-384.jpg"
                    title="Peace Machine"
                    genre="Reggeaton"
                    bpm={90}
                />

                <BeatsCard
                    image="https://cdn.epidemicsound.com/player/20230210.3-2721044e7f8924c2232153450461c8e143316057/c4e6162ea5f06778552179b53edb4cca-384.jpg"
                    title="Big Bana"
                    genre="Rap"
                    bpm={85}
                />

            </div>


        </div>
    );
}
export default Beats;