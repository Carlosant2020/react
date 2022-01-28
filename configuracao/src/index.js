import React from "react"
import  ReactDOM  from "react-dom"
import Button from "./Button"
import "./styles.css"

function soma(){
    alert(a + b)

}

function App ()  {
   
    return (
        <div className="App">
        HEllo WORD
        <Button onClick={() => soma (10,20)} name="carlos"/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />,rootElement)