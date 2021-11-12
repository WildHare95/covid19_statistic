import styles from "../Logo/Logo.module.css"
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo"/>
            <div>STATISTIC</div>
        </div>
    )
}

export default Logo