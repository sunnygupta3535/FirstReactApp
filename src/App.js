import React, { useState } from 'react'
import './App.css'

const FirstReactApp = () => {

    let [mycolor, setMycolor] = useState("pink")

    return (
        <div className="container" style={{ background: mycolor }}>
            <h1 style={{ textAlign: "center" }}> Hello World </h1>
            <button
                className="button"
                style={{background : "linear-gradient(to bottom right, red, green)"}}
                onClick={() => { setMycolor("linear-gradient(to bottom right, red, green)") }}>
                Apple</button>
            <button
                className="button"
                style={{background : "linear-gradient(to bottom right, lightgreen, green)"}}
                onClick={() => { setMycolor("linear-gradient(to bottom right, lightgreen, green)") }}>
                Grapes</button>
            <button
                className="button"
                style={{background : "linear-gradient(to bottom right, orange, yellow, green)"}}
                onClick={() => { setMycolor("linear-gradient(to bottom right, red, yellow, green)") }}>
                Mango</button>
        </div>
    )
}

export default FirstReactApp