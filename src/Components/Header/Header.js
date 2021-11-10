import SearcherEngineContainer from "../SearcherEngine/SearcherEngineContainer";
import styles from "./Header.module.css"
import Logo from "./Logo";

const Header = () => {

    return (
        <div className={styles.header}>
            <Logo/>
            <SearcherEngineContainer/>
        </div>
    )
}

export default Header