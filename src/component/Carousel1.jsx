function Carousel1 (props) {
    return (
        <section id="testimonial">
            <div className="container-fluid">
                <div className="test row text-center my-4">
                    <div className="col">
                        <h3>Testimonial</h3>
                        <p>Berbagai review positif dari para pelanggan kami</p> 
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col d-flex justify-content-center">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" className="carousel-control-prev active" aria-current="true">
                                    <img src="img/Leftbutton.png" alt=""/>
                                </button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" className="carousel-control-next active" aria-current="true">
                                    <img src="img/Rightbutton.png" alt=""/>
                                </button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card d-flex flex-row align-items-center bg-light p-5 m-5" width="619px" height="270px">
                                        <div className="px-5">
                                            <img src="img/testi1.jpeg" alt="..." width="80px" height="80px"/>
                                        </div>
                                        <div className="card-body">
                                            <img src="img/Rate.png" alt=""/>
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                    </div>
                                </div>
                            <div className="carousel-item">
                                <div className="card d-flex flex-row align-items-center bg-light p-5 m-5" width="619px" height="270px">
                                    <div className="px-5">
                                        <img src="img/testi2.jpeg" alt="..." width="80px" height="80px"/>
                                    </div>
                                        <div className="card-body">
                                            <img src="img/Rate.svg" alt=""/>
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                    </div>
                                </div>
                            <div className="carousel-item">
                                    <div className="card d-flex flex-row align-items-center bg-light p-5 m-5" width="619px" height="270px">
                                        <div className="px-5">
                                            <img src="img/testi1.jpeg" alt="..." width="80px" height="80px"/>
                                        </div>
                                        <div className="card-body">
                                            <img src="img/Rate.svg" alt=""/>
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Carousel1 ;