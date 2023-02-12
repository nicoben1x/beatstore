import "./Banner.css";
import banner from"./assets/banner.jpg";


function Banner(){
    return(
        <div className="banner-div">
            <img className="banner-img" src={banner}/>
            <h1 className="banner-h1">Crea una gran canción, con un gran beat...</h1>
            
        </div>
    );

}
export default Banner;