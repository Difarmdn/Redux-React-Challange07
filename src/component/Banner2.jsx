function Banner2 (props) {
    return (
        <section id="our-service">
            <div className="container d-flex flex-row">
                <div className="row m-5 py-5">
                    <div className="col">
                        <img src="img/img_service.png" alt="img_service" />
                    </div>
                    <div className="col pt-4">
                        <h3 className="my-3">Best Car Rental for any kind of trip in (lokasimu)!</h3>
                        <p className="">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
                                Sewa Mobil Jangka Panjang Bulanan
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
                                Gratis Antar - Jemput Mobil di Bandara
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
                                Layanan Airport Transfer / Drop In Out
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner2 ;