import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getIndividualCountryData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();
    // console.log(params);

    const [isPending, startTransistion] = useTransition();
    const [IndcountryData, setIndCountryData] = useState();

    useEffect(() => {
        startTransistion(async () => {
            const res = await getIndividualCountryData(params.id);
            console.log(res.data[0]);
            if (res.status === 200) {
                setIndCountryData(res.data[0])
            }
        })
    }, [])

    // console.log(IndcountryData);

    if (isPending) return <Loader />
    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                {IndcountryData && (
                    <div className="country-image grid grid-two-cols">
                        <img src={IndcountryData.flags.svg} alt={IndcountryData.flags.alt} className="flag" />
                        <div className="country-content">
                            <p className="card-title"> {IndcountryData.name.official} </p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description"> Native Names:</span>
                                    {Object.keys(IndcountryData.name.nativeName)
                                        .map((key) => IndcountryData.name.nativeName[key].common)
                                        .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description"> Population: </span>
                                    {IndcountryData.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="card-description"> Region:</span>
                                    {IndcountryData.region}
                                </p>
                                <p>
                                    <span className="card-description"> Sub Region:</span>
                                    {IndcountryData.subregion}
                                </p>
                                <p>
                                    <span className="card-description"> Capital:</span>
                                    {IndcountryData.capital}
                                </p>

                                <p>
                                    <span className="card-description">Top Level Domain:</span>
                                    {IndcountryData.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description"> Currencies: </span>
                                    {Object.keys(IndcountryData.currencies)
                                        .map((curElem) => IndcountryData.currencies[curElem].name)
                                        .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description">Languages: </span>
                                    {Object.keys(IndcountryData.languages)
                                        .map((key) => IndcountryData.languages[key])
                                        .join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button>Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
