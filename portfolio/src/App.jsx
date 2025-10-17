import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import "./index.css"

function App() {

  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App
