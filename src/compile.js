import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import items from './data'

export default function Compile(){
    const file = items.map(take=>{
        return(
            <Main
        items = {take}
        />
        )
    })
    return(
        <div className="container-fluid" id="contain">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                {file}
            </div>
            <Footer/>
        </div>
    )
}

