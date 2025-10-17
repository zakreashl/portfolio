import { Link } from "react-router-dom"


function ProjectSquare({ link, bg, alt, header, description}) {

    return(
        <div className="projectSquare">
            <Link to={link}><div class="square">
                <img src={bg} alt={alt}/>

                <h1>{header}</h1>

                <p>{description}</p>
            </div></Link>
        </div>
    );
}

export default ProjectSquare