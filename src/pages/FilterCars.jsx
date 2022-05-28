import {Navbar1, Banner1, Filters, Footer1} from "../component";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getCars, carsSelectors } from "../features/carsSlice";

const FlterCars = () => {
    const dispath = useDispatch();
    const cars = useSelector(carsSelectors.selectAll);

    useEffect(() => {
        dispath(getCars());
    }, [dispath]);
    const imgUrl = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public";
    return(
        <div>
            <Navbar1/>
            <Banner1/>
            <Filters/>
            <div class="filtercard">
            {cars.map((cars)=>(
                <div key={cars.id} class="cardfilters mb-3">
                    <img src={imgUrl+cars.image.substring(1)} class="card-img-top" alt="..." height="250px" widht="100px"/>
                        <div class="card-body">
                            <h5>{cars.manufacture}</h5>
                            <h5>Rp {cars.rentPerDay} / hari</h5>
                            <p class="text-cars">{cars.description}</p>
                            <div class="user">
                                <img src="img/fi_users.png" alt="fi_users"/>
                                <label class="text-cars">{cars.capacity}</label>
                            </div>
                            <div class="setting">
                                <img src="img/fi_settings.png" alt="fi_settings"/>
                                <label class="text-cars">{cars.transmission}</label>
                            </div>
                            <div class="tahun">
                                <img src="img/fi_calendar.png" alt="fi_calendar"/>
                                <label class="text-cars">{cars.year}</label>
                            </div>
                                <button type="button" class="buttoncars button4 mt-3">Pilih Mobil</button>
                        </div>
                </div>
                ))}
            </div>
            <Footer1/>
        </div>
    ) 
}

export default FlterCars;