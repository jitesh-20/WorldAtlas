export const Searchfilter = ({ search, setsearch, filter, setfilter, countryData, setCountryData }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setsearch(event.target.value)
    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setfilter(event.target.value)
    }

    const sortCountries = (value) => {
        const sortcountrydata = [...countryData].sort((a, b) => {
            return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
        })
        setCountryData(sortcountrydata)
    }

    return (
        <section className="section-searchFilter container">
            <div className="searchdiv">
                <input type="text" placeholder="search" value={search} onChange={handleInputChange} />
            </div>

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("desc")}>Desc</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}