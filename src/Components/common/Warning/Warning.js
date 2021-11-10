import styles from "./Warning.module.css"


const Warning = () => {
    return (
        <div className={styles.warning}>
            <div className={styles.modal_content}>
                Not found country
            </div>
        </div>
    )
}

export default Warning