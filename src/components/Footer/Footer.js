import React from "react";

export default function Footer(){
    return(
        <div className="row" id="footrow">
            <div className="col" id="footcol1">
            <a href="https://github.com/The-Scientist2042">
            <i class="fa-brands fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/elyon-omidiora-30403a222/">
            <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/OmidioraElyon">
            <i class="fa-brands fa-twitter-square"></i>
            </a>
            </div>
            <div className="col" id="footcol2">
                &copy; Copyright Front-Desk 2022
            </div>
        </div>
    )
}