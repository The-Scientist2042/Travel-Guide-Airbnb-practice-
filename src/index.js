import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Compile from './compile'

function Index(){
    return(
            <Compile/>
    )
}
ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)