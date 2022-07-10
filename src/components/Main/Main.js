import React from "react";

export default function Main(props){
    let link = props.items.googleMapsUrl
    return(
        <div className="col" id="maincol">
            <div className="col" id="maincol11">
                <div className="col" id="img">
                <img src={props.items.imageUrl} alt="" />
                </div>
                <div className="col" id="content">
                <h3 id="loc">{props.items.location}- <a href={link} title = 'Google Map Link'> View Google Map Link </a></h3>
                <h1>{props.items.title}</h1>
                <h3 id="strt">{props.items.startDate}-{props.items.endDate}</h3>
                <h4>{props.items.description}</h4>
                </div>
            </div>
        </div>
    )
}