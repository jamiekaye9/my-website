import './Navbar.css'

const Navbar = () => {
    return (
        <main className="navbar-container">
          <div>
            <img className='logo' src="/Images/logo.png" alt="Logo" />
          </div>
          <nav className="navbar">
            <a className='text' href="">Home</a>
            <a className='text' href="">About Me</a>
            <a className='text' href="">Projects</a>
          </nav>
          <div className="links">
            <a href="https://linkedin.com/in/jamie-kaye-734049187">
                <img className='link-logo' src="/Images/linkedin-logo.png" alt="LinkedIn Logo"/>
            </a>
            <a href="https://github.com/jamiekaye9">
                <img className='link-logo' src="/Images/github-logo.png" alt="Github Logo"/>
            </a>
          </div>
        </main>
    )
}

export default Navbar