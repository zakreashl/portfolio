

function HeroSection({ image, title, subtitle}) {
    
    return(
        <div className="heroSection" style={{ backgroundImage: `url(${image})` }}>
            <div class="content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default HeroSection