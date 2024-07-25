import React, { useContext, useEffect} from "react"
import { DataContext } from "../dataContext";
import MovieList from "./MovieList"
import AddMovieForm from "./AddMovieForm"


function Movie() {
      const {movies, setMovies, getMovies} = useContext(DataContext)

      useEffect(() => {
       getMovies()
      },[])
console.log(movies)
      // const movieElements = movies.map(char => (
         
      //            <MovieList
      //            key = {char._id}
      //            {...char} />                          
            
      // ))
      return (
      
            <div className="char-home" >
               <h1 className="char-h1">Disney Movie</h1>
            <AddMovieForm />
         {/* {movieElements} */}
         </div>
      )
}

export default Movie