import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { Searchfilter } from "../Components/UI/Searchfilter";


const CountryComponent = () => {
    const [isPending, startTransistion] = useTransition();
    const [countryData, setCountryData] = useState([]);

    const [search, setsearch] = useState();
    const [filter, setfilter] = useState("all");

    useEffect(() => {
        startTransistion(async () => {
            const res = await getCountryData();
            // console.log(res);
            setCountryData(res.data)
        })
    }, [])

    //Here country refer to data of Individual country...
    const searchCountry = (country) => {
        console.log(country);
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())    //".includes()" is used for if anyone write any alphabet in the searchbar then searchbar check into the countries name if search alphabet exists then return those countries...
        }
        return countryData
    }

    const filterRegion = (country) => {
        if (filter === "all") return countryData
        return country.region === filter
    }

    // console.log(search , filter);
    const filterCountries = countryData.filter((country) => searchCountry(country) && filterRegion(country))    //Here start the main logic for searching...

    if (isPending) return <Loader />
    return (
        <section className="country-section">

            <Searchfilter search={search} setsearch={setsearch} filter={filter} setfilter={setfilter} countryData={countryData} setCountryData={setCountryData} />

            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((currCountry, index) => {
                        return <CountryCard country={currCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}

export default CountryComponent;