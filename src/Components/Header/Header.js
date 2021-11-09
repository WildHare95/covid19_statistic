import SearcherEngineContainer from "../SearcherEngine/SearcherEngineContainer";
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="not"/>
                <div>STATISTIC</div>
            </div>
            <div>
                <SearcherEngineContainer/>
            </div>

        </div>
    )
}

export default Header