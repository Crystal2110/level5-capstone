import {Link} from "react-router-dom"
import React from "react"



function Home() {

      return (
            <div className="home-container">
               <div className="home-content">
                <h1 className="home-title">Welcome to Disney Characters</h1>
                <p className="home-p">Explore Disney characters, movies, and more!</p>
               </div>
                 
                <div className="home-image-container">
                  <h1 className="image-h1">CHARACTERS</h1>
                  <Link to="/characters">
                  <img className="home-image" src="../image/disney-castle.jpg" alt="my image">
                  </img>
                 
                  </Link>
                </div>
            </div>
      )
}

export default Home