import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home-container">
            <img src="Images/logo-black.png" className='logo-big' alt="Logo" />
            <h1 className='name'>Jamie Kaye</h1>
            <p className='job-title'>Software Engineer</p>
            <div className='button-container'>
                <Link className='button' to="/about-me">About Me</Link>
                <Link className='button' to="/projects">Projects</Link>
            </div>
        </main>
    )

}

export default Home;