
const Contact = () => {
    return (
        <div className="container d-flex flex-column align-items-center w-100 mt-5">
            <div className="row d-flex flex-column justify-content-center align-items-center">
                <h1 className="col-12 text-center display-4 mb-5">Contact Me</h1>
            </div>
            <div className="row  d-flex flex-column justify-content-center align-items-center w-100">
                <div className="col-12 d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap w-100">
                    <div className="card mb-4 col-md-7 col-10 col-xl-3">
                        <div className="card-header d-flex flex-row justify-content-between align-items-center gap-4 bg-dark text-white">
                            <h2 className="card-title">Email</h2>
                            <i className="bi bi-envelope fs-3"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">jamie.kaye4@googlemail.com</p>
                        </div>
                    </div>
                    <div className="card mb-4 col-md-7 col-10 col-xl-3">
                        <div className="card-header d-flex flex-row justify-content-between align-items-center gap-4 bg-dark text-white">
                            <h2 className="card-title">Phone</h2>
                            <i className="bi bi-telephone fs-3"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">+44 7807 904 559</p>
                        </div>
                    </div>
                    <div className="card mb-4 col-md-7 col-10 col-xl-3">
                        <div className="card-header d-flex flex-row justify-content-between align-items-center gap-4 bg-dark text-white">
                            <h2 className="card-title">Location</h2>
                            <i className="bi bi-geo-alt fs-3"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">London, NW11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;