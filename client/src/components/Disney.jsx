import React, {useState} from "react"
import CharacterDetail from "./CharacterDetails" 


export default function Disney(props){

  const {name, movie, story, song, imageUrl, _id } = props
  const [editToggle, setEditToggle] = useState(false)

   return(
    <div className="Disney">
     { !editToggle ?
     <>
     <img src={imageUrl} alt={name} className="character-image" />
     <p className="charactr-name">Name: {name}</p>
     <p className="character-movie">Movie: {movie} </p>
     <p className="character-story">Story: {story}</p>
     <p className="character-song">Song: {song}</p>

     <button className="delete-btn"
             onClick={()=> props.deleteDisney(_id)}>
      Delete
     </button>
     <button className="edit-btn"
             onClick={()=>setEditToggle(prevToggle => !prevToggle)}>
      Edit
     </button>
     </>
     :
     <>
     <CharacterDetail
        name={name}
        movie={movie}
        story={story}
        song = {song}
        image={imageUrl}
        _id={_id}
        btnText="Submit Edit"
        submit={props.editDisney}
        toggleEdit={()=>
        setEditToggle(false)}
     />
     <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
     </>
    }
    </div>
   )
}