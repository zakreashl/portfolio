import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import Footer from "../Footer";
import react from "./../assets/react.svg";


function Projects() {
    return(
        <>
        <NavBar/>

        <HeroSection
        image={react}
        title={"Projects"}
        subtitle={"litteraly my projects"}
        />

        <Footer/>
        </>
    );
}

export default Projects