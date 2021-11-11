import styles from "./UnitStatistic.module.css"
import death from "../../assets/Deaths.png"
import confirmed from "../../assets/Confirmed.png"
import recovered from "../../assets/Recovered.png"
import UnitStatisticComponent from "./UnitStatisticComponent";


const UnitStatisticBlock = ({active, setActive, unitData}) => {
    return (
        <div className={active ? styles.container : styles.containerActive} onClick={() => {
            setActive(false)
        }}>
            <div className={active ? styles.modalContentActive : styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.title}>{unitData.Country}</div>
                <div className={styles.stats}>
                    <UnitStatisticComponent data={unitData.TotalConfirmed} label="Total Confirmed" icon={confirmed}/>
                    <UnitStatisticComponent data={unitData.TotalDeaths} label="Total Deaths" icon={death}/>
                    <UnitStatisticComponent data={unitData.TotalRecovered} label="Total Recovered" icon={recovered}/>
                </div>
            </div>
        </div>
    )
}

export default UnitStatisticBlock
