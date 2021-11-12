import styles from "./DetailedView.module.css"
import death from "../../assets/deaths.png"
import confirmed from "../../assets/confirmed.png"
import recovered from "../../assets/recovered.png"
import DetailedViewComponent from "./DetailedViewComponent";


const DetailedViewBlock = ({active, setActive, unitData}) => {
    return (
        <div className={active ? styles.container : styles.containerActive} onClick={() => {
            setActive(false)
        }}>
            <div className={active ? styles.modalContentActive : styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.title}>{unitData.Country}</div>
                <div className={styles.stats}>
                    <DetailedViewComponent data={unitData.TotalConfirmed} label="Total Confirmed" icon={confirmed}/>
                    <DetailedViewComponent data={unitData.TotalDeaths} label="Total Deaths" icon={death}/>
                    <DetailedViewComponent data={unitData.TotalRecovered} label="Total Recovered" icon={recovered}/>
                </div>
            </div>
        </div>
    )
}

export default DetailedViewBlock
