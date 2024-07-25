import React, {useState, useContext} from "react"
import {DataContext} from "../dataContext"
import {useNavigate} from "react-router-dom"
// import CharacterList from "./CharacterList"

function searchBy() {

    const [searchName, setSearchName] = useState("");
    const [searchMovie, setSearchMovie] = useState("")
    const{disney} = useContext(DataContext);
    const navigate = useNavigate();

    function handleNameSubmit(e) {
        e.preventDefault();

        const searchResult = disney.filter((char) => char.name.toLowerCase().includes(searchName.toLowerCase()));
        console.log(searchResult);

        navigate(`/search/${searchName}/${searchMovie}`)
    }
    
    function handleMovieSubmit(e) {
        e.preventDefault();
        const searchResult = disney.filter((char) => char.movie.toLowerCase().includes(searchMovie.toLowerCase()));
        console.log(searchResult)
        
        navigate(`/search/${searchName}/${searchMovie}`)
    }



    function handleNameChange(e) {
        setSearchName(e.target.value)
    }

    function handleMovieChange(e) {
     setSearchMovie(e.target.value)
 }

    return (
        <div className="search-container">
          <div className="search-name">
            <h2 className="search-h2">Search Characters by Name</h2>
             <form className="form-search" onClick={handleNameSubmit}>
                <input 
                    type="text"
                    placeholder="Enter character name"
                    value={searchName}
                    className="form-input"
                    onChange={handleNameChange}
                />
                <button  className="form-save" type="form-save">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
             </form>
            </div>
            <div className="search-movie">
              <h2 className="search-h2">Search Characters by Movie</h2>
              <form className="form-search" onClick={handleMovieSubmit}>
                <input 
                    type="text"
                    placeholder="Enter character movie"
                    value={searchMovie}
                    className="form-input"
                    onChange={handleMovieChange}
                />
                <button  className="form-save" type="form-save">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
        </div>
    )
}

export default searchBy