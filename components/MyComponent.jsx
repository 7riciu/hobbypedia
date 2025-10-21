import React from "react";
import Style from "../app/style.module.css";

function Hello({display}) {
    return (
        <div className={Style.container}>
            <h1>Hello, world ^^</h1>
            <p>{display}</p>
        </div>
    )
}

export default Hello