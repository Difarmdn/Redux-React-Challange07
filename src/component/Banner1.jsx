function Banner1 (props) {
    return (
        <section id="main">
            <div className="container-fluid d-flex flex-row pt-0 ">
                <div className="firstContent row">
                    <div className="col-md">
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="me-5 fs-6">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="/cars"><button type="button" className="btn btn-success">Mulai Sewa Mobil</button></a>
                    </div>
                    <div className="col-md">
                        <img src="img/mobil5.png"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner1 ;