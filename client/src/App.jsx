import React, { useContext} from 'react'
import {Routes, Route} from "react-router-dom"
// import axios from "axios"
import { DataContext } from "./dataContext"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Characters from "./components/CharacterPage"
import CharacterDetails from "./components/CharacterDetails"
import Search from "./components/Search"
import SearchResult from "./components/SearchrResult"
import Footer from "./components/Footer"
import Movie from "./components/MoviePage"
import MovieDetails from "./components/MovieDetails"


export default function App() {
    const {disney,addDisney,editDisney,deleteDisney, movies, addMovie,editMovie, deleteMovie} = useContext(DataContext)
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/characters" 
             element={<Characters 
             key={disney._id}
             submit={addDisney}/>}/>
      <Route path="/characters/:id" 
             element={<CharacterDetails
             editDisney={editDisney}/>}/>
      <Route path="/movies" 
             element={<Movie
             key={movies._id}
             submit={addMovie}
             btnText="Add Movie"/>}/> 
      <Route path="/movies/:id" 
             element={<MovieDetails
             editDisney={editMovie}/>}/>     
      <Route path="/search" element={<Search/>}/>
      <Route path="/search/:searchName" element={<SearchResult/>}/>
    </Routes>
    <Footer />
    </>
  )

}
