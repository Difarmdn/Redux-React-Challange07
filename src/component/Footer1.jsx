function Footer1 (props) {
    return (
        <section id="footer">
            <footer>
                <div className="container-fluid my-5 pt-5">
                    <div className="row">
                        <div className="col-4">
                            <ul className="list-unstyled">
                                <li className="pb-2"><label>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</label></li>
                                <li className="py-2"><label>binarcarrental@gmail.com</label></li>
                                <li className="py-2"><label>081-233-334-808</label></li>
                            </ul>
                        </div>
                        <div className="col-md fs">
                            <ul className="list-unstyled">
                                <li className="pb-2">
                                <a href="#our-service" className="link-dark"><label className="h6">Our Service</label></a>
                                </li>
                                <li className="py-2">
                                <a href="#why-us" className="link-dark"><label className="h6">Why Us</label></a>
                                </li>
                                <li className="py-2">
                                <a href="#testimonial" className="link-dark"><label className="h6">Testimonial</label></a>
                                </li>
                                <li className="py-2">
                                <a href="#faq" className="link-dark"><label className="h6">FAQ</label></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 logoFooter">
                            <label className="mb-4">Connect with us</label><br />
                                <a href="#facebook" className="link-item me-1"><img src="img/footerfb.jpeg" alt="" /></a>
                                <a href="#instagram" className="link-item mx-1"><img src="img/footerig.jpeg" alt="" /></a>
                                <a href="#twitter" className="link-item mx-1"><img src="img/footertwitter.jpeg" alt="" /></a>
                                <a href="#mail" className="link-item mx-1"><img src="img/footertmail.jpeg" alt="" /></a>
                                <a href="#twitch" className="link-item mx-1"><img src="img/footertwitc.jpeg" alt="" /></a>
                        </div>
                        <div className="col-3">
                            <label className="mb-2">Copyright Binar 2022</label><br />
                            <img src="img/imagelogo.png" alt="icon" width="100px" />
                        </div>
                    </div>
                </div>
            </footer>
    </section>
    )
}


export default Footer1 ;