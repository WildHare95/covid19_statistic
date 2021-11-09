import {useEffect, useState} from "react";
import styles from "./SearcherEngine.module.css"

const Searcher = (props) => {

    const [tempSearch, setTempSearch] = useState("")

    useEffect(() => {
        const filteredCountries = props.country.filter(country => {
            return country.Country.toLowerCase().includes(tempSearch.toLowerCase())
        })

        props.setFilteredData(filteredCountries)
    }, [props.country, tempSearch])

    return (
        <div className={styles.searcher}>
            <form>
                <input type="text" placeholder={"Search..."}
                       onChange={(e) => {
                           setTempSearch(e.currentTarget.value)
                       }}/>
            </form>

        </div>
    )
}

export default Searcher
