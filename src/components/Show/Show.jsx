import { useParams } from 'react-router-dom';
import './Show.css';

const Show = (props) => {
    const { id } = useParams();
    const project = props.projects.find((project) => project.id === parseInt(id));
    return (
        <main className='show-main-container'>
            <div className='show-container'>
                <div className='show-logo-container' style={{ backgroundColor: project.backgroundColor }}>
                    <img className='show-logo' src={project.img} alt={project.name} style={{ width: project.showWidth }} />
                    <a href={project.link} className='show-link'>Deployed Link</a>
                </div>
                <div className='show-text-container' style={{ backgroundColor: project.backgroundColor }}>
                    <h2 className='show-title'>Description</h2>
                    <p className='show-text'>{project.description}</p>
                </div>
                <div className='show-text-container' style={{ backgroundColor: project.backgroundColor }}>
                    <h2 className="show-title">Reflection</h2>
                    <p className='show-text'>{project.build}</p>
                </div>
            </div>
            <div className='show-tech-container' style={{ backgroundColor: project.backgroundColor }}>
                <div className='show-tech'>
                    <h2 className='show-title-tech'>Technologies Used:</h2>
                    <p className='tech-used'>{project.techUsed}</p>
                </div>
                <div>
                    <a href={project.gitLink} className='show-link'>GitHub Link</a>

                </div>
            </div>
        </main>
    )
}

export default Show;