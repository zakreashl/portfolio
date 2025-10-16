import HeroSection from "./HeroSection.jsx";
import NavBar from "./NavBar.jsx"
import mountain from "./assets/mountains.jpg"
import "./index.css"

function App() {

  return(
    <>
    <NavBar/>
    <HeroSection
        image={mountain}
        title="Zakrea Shlaibah"
        subtitle="littwerly my website"
    />
    </>
  );
}

export default App
