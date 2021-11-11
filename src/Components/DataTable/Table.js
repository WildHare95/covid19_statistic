import styles from "./TableStyles.module.css"
import Warning from "../common/Warning/Warning";
import {useState} from "react";


const Table = ({currentCountries, setModalActive, setUnitData, sortData}) => {
    const [sortFit, setSortFit] = useState(null)

    return (
        currentCountries.length > 0 ?
        <table className={styles.tableContainer}>
            <tbody>
            <tr>
                <td className={styles.border_right}>№</td>
                <td className={styles.border_mid} onClick={() => setSortFit((current) => current = null)}>Country</td>
                <td className={styles.border_left} onClick={() => setSortFit((current = true) => !current)}>Total Confirmed</td>
            </tr>
            {

                sortData(currentCountries,sortFit).map((item, index) => (
                        <tr  className={styles.tableBody} key={index} onClick={() => {
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
        </table>:
    <Warning/>
    );
}

export default Table;
