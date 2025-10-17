import { Link } from 'react-router-dom'


function NavBar() {
    
    return(
        <nav className="navbar">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><a href="https://lebron.tech/">ghmm</a></li>
                <li><a href="">ok</a></li>
            </ul>
        </nav>
    );
}

export default NavBar