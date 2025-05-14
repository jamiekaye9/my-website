import './Home.css'

const Home = () => {
    return (
        <main className="home-container">
            <img src="Images/logo-black.png" className='logo-big' alt="Logo" />
            <h1 className='name'>Jamie Kaye</h1>
            <p className='job-title'>Software Engineer</p>
            <div className='button-container'>
                <a className='button' href="/about-me">About Me</a>
                <a className='button' href="/projects">Projects</a>
            </div>
        </main>
    )

}

export default Home;