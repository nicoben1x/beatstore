import "./Contact.css"
import gmail from "./assets/Gmail_black.png"
import instagram from "./assets/Instagram_black.png"
import youtube from "./assets/Youtube_black.png"

function Contact() {
    return (
        <div className="contact-div">
            <h1 className="contact-h1">Contact</h1>
            <div className="contact-space">
                <div className="contact-card">
                    <img className="contact-card-img" src={gmail} />
                    <h2 className="contact-card-h2">Email</h2>
                </div>
                <div className="contact-card">
                    <img className="contact-card-img" src={instagram} />
                    <h2 className="contact-card-h2">Instagram</h2>
                </div>
                <div className="contact-card">
                    <img className="contact-card-img" src={youtube} />
                    <h2 className="contact-card-h2">Youtube</h2>
                </div>
            </div>

        </div>
    );
}

export default Contact;