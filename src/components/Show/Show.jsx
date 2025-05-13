import { useParams } from 'react-router-dom';
import './Show.css';

const Show = (props) => {
    const { id } = useParams();
    const project = props.projects.find((project) => project.id === parseInt(id));
    return (
        <main className='show-main-container'>
            <div className='show-container' style={{ backgroundColor: project.backgroundColor }}>
                <img className='project-image' src={project.img} alt={project.name} style={{width: project.bigImageWidth}} />
                <div>
                <p className='text-title'>Deployed Link:</p>
                <a href={project.link} className='text'>{project.link}</a>
                <p className='text-title'>Technologies Used:</p>
                <p className='text'>{project.techUsed}</p>
                </div>
            </div>
            <div className='info-container'>
                <h2 className='info-title'>Description:</h2>
                <p className='description'>{project.description}</p>
                <h2 className='info-title'>Project Reflection:</h2>
                <p className='description'>{project.build}</p>
            </div>
        </main>
    )
}

export default Show;