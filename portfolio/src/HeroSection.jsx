import "./HeroSection.css"
import mountain from "./assets/mountains.jpg"

function HeroSection() {
    
    return(
        <div className="heroSection" style={{ backgroundImage: `url(${mountain})` }}>
            <div class="content">
                <h1>Zakrea Shlaibah</h1>
                <p>litteraly my website</p>
            </div>
        </div>
    );
}

export default HeroSection