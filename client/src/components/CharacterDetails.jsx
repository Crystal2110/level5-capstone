import React, {useState, useContext} from "react"
import {useParams} from "react-router"
import {DataContext} from "../dataContext"
import AddDisneyForm from "./AddDisneyForm"

export default function CharacterDetails(props) {
      const {id} = useParams()
      const{disney} = useContext(DataContext)
      // const {name, movie, story, song, imageUrl, _id } = props
      const [editToggle, setEditToggle] = useState(false)
      const foundChars = disney.find((char) => String(char._id) === String(id));

  
    if (!foundChars) {
      return <div>Character not found</div>;
    }

      return (
            <div className="detail-container">
               { !editToggle ?
                  <>
                  <div className="char-detail">
                  <img src={foundChars.imageUrl} alt={foundChars.name} className="char-image" />
                  <p className="chardetail-p">Name: {foundChars.name}</p>
                  
                  {foundChars.movie && foundChars.movie.length > 0 ? (
                  <p className="chardetail-p">Movie: {foundChars.movie}</p>) : (<p className="chardetail-p">Movie: none</p>)}

                  {foundChars.song && foundChars.song.length > 0 ? (
                  <p className="chardetail-p">Song: {foundChars.song}</p>) : (<p className="chardetail-p">Song: none</p>)}

                  {foundChars.story && foundChars.story.length > 0 ? (
                  <p className="chardetail-p">Story: {foundChars.story}</p>) : (<p className="chardetail-p">Story: none</p>)}
                 
                  <button className="delete-btn"
                          onClick={()=> props.deleteDisney(foundChars._id)}>
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
                  <AddDisneyForm
                        name={foundChars.name}
                        movie={foundChars.movie}
                        story={foundChars.story}
                        song = {foundChars.song}
                        imageUrl={foundChars.imageUrl}
                        _id={foundChars._id}
                        btnText="Submit Edit"
                        submit={props.editDisney}
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