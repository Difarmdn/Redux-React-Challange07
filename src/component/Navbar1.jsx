function Navbar1 (props) {
    return (
        <div className="container-fluid">
            <nav className="container navbar navbar-expand-md navbar-light fixed-top w-100 pt-4 desktopNav">
                <div className="container nav-justify-content-between">
                    <div>
                        <a href="#" className="navbar-logo">
                        <img src="img/imagelogo.png" alt="icon" width="100px" />
                        </a>
                    </div>
                    <div>
                        <ul className="logo navbar-nav ">
                        <li className="nav-item text-body ">
                            <a href="#our-service" className="nav-link mx-2">Our Service</a>
                        </li>
                        <li className="nav-item">
                            <a href="#why-us" className="nav-link mx-2">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonial" className="nav-link mx-2">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faq" className="nav-link mx-2">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-success mx-2">Register</button>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar1 ;