import styles from "./Warning.module.css"


const Warning = () => {
    return (
        <div className={styles.warning}>
            <div className={styles.warningModalContent}>
                Not found country
            </div>
        </div>
    )
}

export default Warning