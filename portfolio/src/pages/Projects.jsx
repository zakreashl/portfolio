import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import ProjectSquareContainer from "../ProjectSquareContainer";
import ProjectSquare from "../ProjectSquare";
import Footer from "../Footer";

import react from "./../assets/react.svg";
import luminata from "./../assets/luminata.png"


function Projects() {
    return(
        <>
        <NavBar/>

        <HeroSection
        image={react}
        title={"Projects"}
        subtitle={"litteraly my projects"}
        />

        <ProjectSquareContainer>
            <ProjectSquare
            link={'https://zoodoz.itch.io/'}
            bg={luminata}
            alt={"luminata thumbnail"}
            header={"Games"}
            description={"All of the Unity games I have made"}
            />
        </ProjectSquareContainer>

        <Footer/>
        </>
    );
}

export default Projects