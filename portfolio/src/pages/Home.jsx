import NavBar from "./../NavBar.jsx"
import HeroSection from "./../HeroSection.jsx";
import Footer from "../Footer.jsx";
import mountain from "./../assets/mountains.jpg"

function Home() {

  return(
    <>
    <NavBar/>
    <HeroSection 
        image={mountain}
        title={"Zakrea Shlaibah"}
        subtitle={"litteraly my website"}
    />
    <Footer/>
    </>
  );
}

export default Home
