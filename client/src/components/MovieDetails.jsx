import React, {useState, useContext, useEffect} from "react"
import {useParams} from "react-router"
import {DataContext} from "../dataContext"
import AddMovieForm from "./AddMovieForm"

export default function MovieDetails() {
      const {id} = useParams()
      const{movies, deleteMovie, editMovie} = useContext(DataContext)
      // const {name, movie, story, song, imageUrl, _id } = props
      const [editToggle, setEditToggle] = useState(false)

      const foundMovies = movies.find((movie) => String(movie._id) === String(id));
     //  useEffect(() => {
     //   if (!movies.length) {
     //     getMovies();
     //   }
     // }, [movies, getMovies]);
   
     // const foundMovies = Array.isArray(movies) ? movies.find((movie) => String(movie._id) === String(id)) : null;
  
    if (!foundMovies) {
      return <div>Movie not found</div>;
    }

      return (
            <div className="detail-container">
               { !editToggle ?
                  <>
                  <div className="char-detail">
                  <img src={foundMovies.imageUrl} alt={foundMovies.title} className="char-image" />
                  <p className="chardetail-p">Title: {foundMovies.title}</p>

                  {foundMovies.description && foundMovies.description.length > 0 ? (
                  <p className="chardetail-p">Description: {foundMovies.description}</p>) : (<p className="chardetail-p">Description: none</p>)}

                  {foundMovies.author && foundMovies.author.length > 0 ? (
                  <p className="chardetail-p">Author: {foundMovies.author}</p>) : (<p className="chardetail-p">Author: none</p>)}

                  {foundMovies.genre && foundMovies.genre.length > 0 ? (
                  <p className="chardetail-p">Genre: {foundMovies.genre}</p>) : (<p className="chardetail-p">Genre: none</p>)}
                 
                  <button className="delete-btn"
                          onClick={()=> deleteMovie(_id)}>
                          Delete
                  </button>
                  <button className="edit-btn"
                          onClick={()=>setEditToggle(prevToggle => !prevToggle)}>
                          Edit
                  </button>
                  </div>
                  </>
                  :
                  <>
                  <AddMovieForm
                        title={foundMovies.title}
                        description={foundMovies.description}
                        genre={foundMovies.genre}
                        author= {foundMovies.author}
                        imageUrl={foundMovies.imageUrl}
                        _id={foundMovies._id}
                        btnText="Submit Edit"
                        submit={editMovie}
                        toggleEdit={()=>
                        setEditToggle(false)}
                  />
                  <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
                  </>
                  }
                  <button className="back-button" onClick={() => window.history.back()}>Back</button>
          
            </div>
      )

}