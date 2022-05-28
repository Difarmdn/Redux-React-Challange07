

function Filters (props) {
    return (
        <section id="Filters">
                <div className="container-fluid" id="cari-mobil">
                    <div className="card shadow" id="cm-search">
                        <form id="cm-form">
                            <div className="row p-4">
                                <div className="col">
                                    <h6>Tipe Driver</h6>
                                    <br />
                                        <div className="input-group mb-3">
                                            <select className="form-select" id="driver">
                                                <option hidden>Pilih Tipe Driver</option>
                                                <option value="true">Dengan Supir</option>
                                                <option value="false">Tanpa Supir (Lepas Kunci)</option>
                                            </select>
                                        </div>
                                </div>
                                <div className="col">
                                    <h6>Tanggal</h6>
                                    <br />
                                        <div className="input-group mb-3">
                                            <input type="date" className="form-control" id="datelist" placeholder="Pilih Tanggal" aria-label="Pilih Tanggal" >
                                                </input>
                                        </div>
                                </div>
                                <div className="col">
                                    <h6>Waktu Jemput/Ambil</h6>
                                    <br />
                                        <div className="input-group mb-3">
                                            <select className="form-select" id="timelist">
                                                        <option hidden>Pilih Waktu</option>
                                                        <option value="1">01.00 WIB</option>
                                                        <option value="2">02.00 WIB</option>
                                                        <option value="3">03.00 WIB</option>
                                                        <option value="4">04.00 WIB</option>
                                                        <option value="5">05.00 WIB</option>    
                                                        <option value="6">06.00 WIB</option>    
                                                        <option value="7">07.00 WIB</option>   
                                                        <option value="8">08.00 WIB</option>
                                                        <option value="9">09.00 WIB</option>
                                                        <option value="10">10.00 WIB</option>
                                                        <option value="11">11.00 WIB</option>
                                                        <option value="12">12.00 WIB</option>    
                                                        <option value="13">13.00 WIB</option>    
                                                        <option value="14">14.00 WIB</option>    
                                                        <option value="15">15.00 WIB</option>    
                                                        <option value="16">16.00 WIB</option>
                                                        <option value="17">17.00 WIB</option>
                                                        <option value="18">18.00 WIB</option>
                                                        <option value="19">19.00 WIB</option>
                                                        <option value="20">20.00 WIB</option>
                                                        <option value="21">21.00 WIB</option>    
                                                        <option value="22">22.00 WIB</option>    
                                                        <option value="23">23.00 WIB</option>    
                                                        <option value="24">24.00 WIB</option>    
                                            </select>
                                        </div>
                                </div>
                                <div className="col">
                                    <h6>Jumlah Penumpang</h6>
                                    <br />
                                        <div mb-3>
                                            <select className="form-select" id="seat">
                                                    <option value="0">Jumlah Penumpang (Optional)</option>
                                                    <option value="2">2</option>
                                                    <option value="4">4</option>
                                                    <option value="6">6</option>
                                                    <option value="6">8</option>
                                            </select>
                                        </div>
                                </div>
                                <div className="col">
                                    <button type="button" id="tombolButton" className="btncri btn-success">Cari Mobil</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row row-cols-4 row-cols-lg pt-5" id="dataCars">
                </div>
            </div>
        </section>
    )
}


export default Filters;