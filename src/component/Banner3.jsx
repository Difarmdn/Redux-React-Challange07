function Banner3 (props) {
    return (
        <section id="why-us">
            <div className="container mb-5">
                <div className="contentWhyUs">
                    <h3 className="mb-4">Why Us?</h3>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="row d-flex justify-content-center mt-4 card_WhyUs">
                    <div className="content col-md border border-body rounded p-4 mx-3" width="268px" heigh="226px">
                        <img src="img/iconlike.jpeg" alt="icon_complete" width="32px" height="32px" />
                        <h5 className="my-3">Mobil Lengkap</h5>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div className="content col-md border border-body rounded p-4 mx-3"  width="268px" heigh="226px">
                        <img src="img/iconprice.jpeg" alt="icon_prince" width="32px" height="32px" />
                        <h5 className="my-3">Harga Murah</h5>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div className="content col-md border border-body rounded p-4 mx-3"  width="268px" heigh="226px">
                        <img src="img/iconclock.jpeg" alt="icon_24hrs" width="32px" height="32px" />
                        <h5 className="my-3">Layanan 24 Jam</h5>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga tersedia di akhir minggu</p>
                    </div>
                    <div className="content col-md border border-body rounded p-4 mx-3"  width="268px" heigh="226px">
                        <img src="img/iconsucces.jpeg" alt="icon_professional" width="32px" height="32px" />
                        <h5 className="my-3">Sopir Profesional</h5>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Banner3 ;