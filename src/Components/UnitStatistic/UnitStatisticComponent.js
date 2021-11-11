import styles from "./UnitStatistic.module.css"

const UnitStatisticComponent = ({data, label, icon}) => {
    return (
        <div>
            <div className={styles.line}>
                <div className={styles.text}>
                    <img className={styles.icon} src={icon}
                         alt="icon"/>
                    <div>{label}</div>
                </div>
                <div>{data}</div>
            </div>
        </div>


    )
}

export default UnitStatisticComponent