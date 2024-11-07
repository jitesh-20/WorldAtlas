import countryData from "../api/countrydata.json";

const AboutComponent = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting Facts
                <br />
                We're Proud of
            </h2>

            <div className="gradient-cards">
                {countryData.map((currCountry) => {
                    const { id, countryname, capital, population, touristplace } = currCountry             //This is destructuring the object..
                    
                    return (
                        <div className="card" key={id}>
                            <div className="container-card bg-blue-box">
                                <p className="card-title">{countryname}</p>
                                <p>
                                    <span className="card-description">Capital : </span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="card-description">Population : </span>
                                    {population}
                                </p>
                                <p>
                                    <span className="card-description">Tourist Place : </span>
                                    {touristplace}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AboutComponent;