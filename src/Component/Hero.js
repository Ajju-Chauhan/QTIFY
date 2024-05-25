
import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
    return <div className={styles.hero}>
        <div>
        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
        </div>
        <div>
            <img
            src={require("../assets/hero.png")}
            />
        </div>
    </div>
}

export default Hero;