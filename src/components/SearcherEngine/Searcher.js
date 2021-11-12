import styles from "./SearcherEngine.module.css"

const Searcher = ({setTempSearch}) => {

    return (
        <div>
            <form className={styles.formStyle}>
                <input className={styles.inputStyle} type="text" placeholder={"Search..."}
                       onChange={(e) => {setTempSearch(e.currentTarget.value)}}/>
            </form>
        </div>
    )
}

export default Searcher
