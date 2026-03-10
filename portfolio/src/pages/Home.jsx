import HeroSection from "./../HeroSection.jsx";
import Footer from "../Footer.jsx";
import ProjectSquareContainer from "../ProjectSquareContainer.jsx";
import ProjectSquare from "../ProjectSquare.jsx";
import mountain from "./../assets/mountains.jpg"

import luminata from "./../assets/luminata.png";
import heap from "./../assets/heap.jpg"
import stack from "./../assets/stack.png"
import cShell from "./../assets/cShell.png"
import matrix from "./../assets/matrix.gif"
import search from "./../assets/wiki-search-engine.jpg"
import tcp_server from "./../assets/tcp server.png"

function Home() {

  return(
    <>
    <HeroSection
        image={mountain}
        title={"Zakrea Shlaibah"}
        subtitle={"litteraly my website"}
    />
    <h1 style={{ textAlign: "center", marginTop: "80px", fontSize: "64px" }}>Projects</h1>
    <ProjectSquareContainer>
        <ProjectSquare
            link={"https://github.com/zakreashl/TCP-Server"}
            bg={tcp_server}
            alt={"TCP Server Demo"}
            header={"TCP Server"}
            description={"A TCP server/client with the ability to send and recive messages through a nice TUI"}
        />
        <ProjectSquare
            link={"https://github.com/zakreashl/TF-IDF-Search-Engine"}
            bg={search}
            alt={"Wikipedia search"}
            header={"TF-IDF Search Engine"}
            description={"A search engine able to search through 10k wikipedia articles with TF-IDF made in python"}
        />
        <ProjectSquare
            link={"https://github.com/zakreashl/Matrix"}
            bg={matrix}
            alt={"Cool matrix animation"}
            header={"Matrix"}
            description={"Randomly generated matrix animation in C"}
        />
        <ProjectSquare
            link={"https://github.com/zakreashl/My_malloc"}
            bg={heap}
            alt={"Heap icon"}
            header={"Heap"}
            description={"A mini heap I made with malloc and free functions"}
        />
        <ProjectSquare
            link={"https://github.com/zakreashl/Toy-Stack-in-C-and-ASM"}
            bg={stack}
            alt={"Stack icon"}
            header={"Stack"}
            description={"A mini stack I made with C and ASM with push and pop functions"}
        />
        <ProjectSquare
            link={"https://github.com/zakreashl/cShell"}
            bg={cShell}
            alt={"cShell"}
            header={"cShell"}
            description={"A custom shell I made in C"}
        />
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

export default Home
