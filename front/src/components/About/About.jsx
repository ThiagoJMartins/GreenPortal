import React from "react";
import './about.css'
//!----------------------------------------------------+/


function About() {
    return (
        <div>
            <h1>
                About
            </h1>
            <h3 class= 'about'>This project is a web application that allows users to navigate through the characters of the animated series <b>"Rick and Morty"</b> and interact with them. 
            <br />The app uses the <a href="https://rickandmortyapi.com/"><i>Rick and Morty API</i></a> to get character information. This project is part of the SoyHenry bootcamp.
            <br />We hope you to enjoy this website</h3>
            <br />
            <img src="../../public/about.gif" alt="aboutGif" />
        </div>
    )
}

export default About;