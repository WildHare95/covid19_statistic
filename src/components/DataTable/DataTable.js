import {useEffect, useState} from "react";
import styles from "./Table.module.css"
import DetailedViewBlock from "../UnitStatistic/DetailedViewBlock";
import Table from "./Table";
import Preloader from "../common/Preloader/Preloader";

const DataTable = ({getCountriesStatistics, data, isLoaded}) => {

    const numberOfCountriesShown = 20

    const [showedCountriesAmount, setShowedCountriesAmount] = useState(numberOfCountriesShown)
    const [modalActive, setModalActive] = useState(false)
    const [unitData, setUnitData] = useState({})

    const currentCountries = data.slice(0, showedCountriesAmount)


    useEffect(() => {
        getCountriesStatistics()
    }, [])


    const addCountries = () => setShowedCountriesAmount(showedCountriesAmount + numberOfCountriesShown)

    return (
        <div className={styles.tableWrapper}>
            {
                isLoaded ?
                    <Table currentCountries={currentCountries}
                           setModalActive={setModalActive}
                           setUnitData={setUnitData}
                    />
                    :
                    <Preloader/>
            }
            {
                data.length > showedCountriesAmount &&
                <button className={styles.buttonAdd} onClick={() => addCountries()}>
                    <span>Add Countries</span>
                </button>
            }
            <DetailedViewBlock active={modalActive} setActive={setModalActive} unitData={unitData}/>

        </div>
    );
}

export default DataTable;
