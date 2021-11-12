import React from "react";
import styles from "./Preloader.module.css"

const Preloader = () => {

    const getClassName = () => {
        return `${styles.ldsDualRing} + ${styles.ringContainer}`
    }

    return (
        <div className={getClassName()}/>
    )
}

export default Preloader