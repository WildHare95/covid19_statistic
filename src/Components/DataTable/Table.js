import styles from "./TableStyles.module.css"
import Warning from "../common/Warning/Warning";


const Table = ({currentCountries, setModalActive, setUnitData}) => {

    return (
        currentCountries.length > 0 ?
        <table className={styles.tableContainer}>
            <tbody>
            <tr>
                <td>№</td>
                <td>Country</td>
                <td>Total Confirmed</td>
            </tr>
            {

                currentCountries.map((item, index) => (
                        <tr key={index} onClick={() => {
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
