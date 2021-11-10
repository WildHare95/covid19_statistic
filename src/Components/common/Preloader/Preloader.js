import React from "react";
import styles from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={`${styles.ldsDualRing} + ${styles.ringContainer}`}/>
    )
}

export default Preloader