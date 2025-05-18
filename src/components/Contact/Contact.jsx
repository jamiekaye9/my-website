import "./Contact.css";

const Contact = () => {
    return (
        <main className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-grid">
                <div className="contact-card">
                    <h2 className="card-title">Email</h2>
                    <img src="./Images/email.png" alt="Email" className="img"  />
                    <a href="jamie.kaye4@googlemail.com" className="card-link">jamie.kaye4@googlemail.com</a>
                </div>
                <div className="contact-card">
                    <h2 className="card-title">Phone</h2>
                    <img src="./Images/phone.png" alt="Phone" className="img" />
                    <a href="+447807904559" className="card-link">+44 7807 904 559</a>
                </div>
                <div className="contact-card">
                    <h2 className="card-title">LinkedIn</h2>
                    <img src="./Images/link.png" alt="LinkedIn" className="img"  />
                    <a href="https://linkedin.com/in/jamie-kaye-734049187" className="card-link">linkedin.com/in/jamie-kaye-734049187</a>
                </div>
            </div>
        </main>
    )
}

export default Contact;