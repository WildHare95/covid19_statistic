import {useEffect} from "react";
import styles from "./TableStyles.module.css"


const DataTable = (props) => {

    const portion = props.data.slice(0, 20)

    useEffect(() => {
        props.getCountriesStatistics()
    }, [])

    return (
        <div className={styles.tableWrapper}>

            <table className={styles.tableContainer}>
                <tbody>
                <tr>
                    <td>№</td>
                    <td>Country</td>
                    <td>Total Confirmed</td>
                </tr>

                {
                    portion.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.Country}</td>
                            <td>{item.TotalConfirmed}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
        </div>
    );
}

export default DataTable;
