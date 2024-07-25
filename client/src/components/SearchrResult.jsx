import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {DataContext} from "../dataContext"
import CharacterList from "./CharacterList"

export default function SearchResult() {
      const {searchName, searchMovie} = useParams()
      const {disney} = useContext(DataContext)
      
      const foundChars = disney.filter((char) => {     const matchesName = searchName ? char.name.toLowerCase().includes(searchName.toLowerCase()) : true;
      const matchesMovie = searchMovie ? char.movie.toLowerCase().includes(searchMovie.toLowerCase()) : true;
      return matchesName && matchesMovie;
      })

      const characterElements = foundChars.map((char) => (
            <CharacterList 
                  key={char._id}
                  {...char}
            />
      ))
      return (
            <div className="search-results">
               <h2 className="result-h2">Search Results for ""</h2>
                  {characterElements.length > 0 ? (characterElements) : 
                  (<p>No characters found.</p>)}
            </div>
      )
}