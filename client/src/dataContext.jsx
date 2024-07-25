import React, {useState, useEffect} from "react"
import axios from "axios"

const DataContext = React.createContext()

function DataContextProvider(props) {
 const [disney, setDisney] = useState([])
 const [movies, setMovies] = useState([])

 function getDisney(){
   axios.get("/api/disney")
   .then(res => {
     console.log(res)
     setDisney(res.data)
   })
   .catch(err => console.log(err))
 }

 function addDisney(newDisney){
   axios.post("/api/disney", newDisney)
     .then(res => {
       setDisney(prevDisney => [...prevDisney, res.data])
     })
     .catch(err => console.log(err))
 }

 function deleteDisney(disneyId){
   axios.delete(`/api/disney/${disneyId}`)
     .then(res => {
       setDisney(prevDisney => prevDisney.filter(disney => disney._id !== disneyId))
     })
     .catch(err => console.log(err))
 }

 function editDisney(updates, disneyId) {
   axios.put(`/api/disney/${disneyId}`, updates)
   .then(res => {
     setDisney(prevDisney => prevDisney.map(disney => disney._id !== disneyId ? disney : res.data))
   })
   .catch(err => console.log(err))
 }

 useEffect(() => {
  getDisney();
;

}, [])

async function getMovies(){
      try {
        const res = await axios.get("/api/movies")
        setMovies(res)
      } catch (error) {
        console.log(error)
      }
  }

 function addMovie(newMovie) {
    axios.post("/movies", newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
 }

 function deleteMovie(movieId){
    axios.delete(`/movies/${movieId}`)
    .then(res => {
      setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
    })
    .catch(err => console.log(err))
 }

 function editMovie(updates, movieId) {
    axios.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
 }



 return (
      <DataContext.Provider value={{disney, setDisney, getDisney,addDisney, deleteDisney, editDisney, movies, setMovies, getMovies, addMovie, deleteMovie, editMovie}}>
         {props.children}
      </DataContext.Provider>
     )
}

export {DataContext, DataContextProvider}
