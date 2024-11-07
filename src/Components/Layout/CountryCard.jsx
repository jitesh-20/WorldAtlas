import { NavLink } from "react-router-dom"

export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country
    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt} />
                <div className="countryInfo">
                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0, 12) + "..." : name.common}</p>
                    <p>
                        <span className="card-descriptipon">Population : </span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="card-descriptipon">Region : </span>
                        {region}
                    </p>
                    <p>
                        <span className="card-descriptipon">Capital : </span>
                        {capital[0]}
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More</button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}