import {useEffect, useState} from "react";
import styles from "./TableStyles.module.css"
import UnitStatisticBlock from "../UnitStatistic/UnitStatisticBlock";
import Table from "./Table";
import Preloader from "../common/Preloader/Preloader";


const DataTable = ({getCountriesStatistics, data, isLoaded}) => {

    const [addCountries, setAddCountries] = useState(20)
    const [modalActive, setModalActive] = useState(false)
    const [unitData, setUnitData] = useState({})
    const currentCountries = data.slice(0, addCountries)

    useEffect(() => {
        getCountriesStatistics()
    }, [])

    return (
        <div className={styles.tableWrapper}>
            {
                isLoaded ?
                <Table currentCountries={currentCountries} setModalActive={setModalActive} setUnitData={setUnitData}/> :
                <Preloader/>
            }
            {
                data.length > addCountries ?
                    <button onClick={() => {
                        setAddCountries(addCountries + 20)}}>
                        <span>Add Countries</span>
                    </button> :
                    <></>
            }
            <UnitStatisticBlock active={modalActive} setActive={setModalActive} unitData={unitData}/>

        </div>
    );
}

export default DataTable;
