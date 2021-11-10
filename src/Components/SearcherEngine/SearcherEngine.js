import {useEffect, useState} from "react";
import Searcher from "./Searcher";

const SearcherEngine = ({country, setFilteredData}) => {

    const [tempSearch, setTempSearch] = useState("")

    useEffect(() => {
        const filteredCountries = country.filter(country => {
            return country.Country.toLowerCase().includes(tempSearch.toLowerCase())
        })

        setFilteredData(filteredCountries)
    }, [country, tempSearch])

    return (
        <div >
            <Searcher setTempSearch={setTempSearch}/>
        </div>
    )
}

export default SearcherEngine
