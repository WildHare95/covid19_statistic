import styles from "./Table.module.css"
import Warning from "../common/Warning/Warning";
import {useState} from "react";
import sortData from "../common/sorting/SortingHelper";


const Table = ({currentCountries, setModalActive, setUnitData}) => {
    const [sortFit, setSortFit] = useState(null)

    return (
        currentCountries.length > 0 ?
            <table className={styles.tableContainer}>
                <tbody>
                <tr>
                    <td className={styles.borderRight}>№</td>
                    <td className={styles.borderMid} onClick={() => setSortFit((current) => current = null)}>Country
                    </td>
                    <td className={styles.borderLeft} onClick={() => setSortFit((current = true) => !current)}>Total
                        Confirmed
                    </td>
                </tr>
                {

                    sortData(currentCountries, sortFit).map((item, index) => (
                            <tr className={styles.tableBody} key={index} onClick={() => {
                                setModalActive(true)
                                setUnitData(
                                    {
                                        Country: item.Country,
                                        TotalConfirmed: item.TotalConfirmed,
                                        TotalDeaths: item.TotalDeaths,
                                        TotalRecovered: item.TotalRecovered
                                    }
                                )
                            }}>
                                <td>{index + 1}</td>
                                <td>{item.Country}</td>
                                <td>{item.TotalConfirmed}</td>
                            </tr>
                        )
                    )

                }
                </tbody>
            </table> :
            <Warning/>
    );
}

export default Table;
