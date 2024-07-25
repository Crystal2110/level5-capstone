import React, { useState,useContext} from "react"
import { DataContext } from "../dataContext";
import CharacterList from "./CharacterList"
import Disney from "./Disney"


function Characters(props) {
      const {disney} = useContext(DataContext)

      const initInputs = {
       name: "",
       movie: "",
       song: "",
       story: "",
       imageUrl: ""
      }

      const [inputs, setInputs] = useState(initInputs)

      function handleChange(e) {
       const { name, value,} = e.target
       setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value,
       }));
     }

     function handleSubmit(e){
      e.preventDefault()
      props.submit(inputs, props._id)
      setInputs(initInputs)
      if(props.toggleEdit) {
        props.toggleEdit();
      }
     }

      const characterElements = disney.map(char => (
         
                 <CharacterList
                 key = {char._id}
                 {...char}
                 // deleteDisney={deleteDisney}
                 // editDisney={editDisney}
                 // submit={addDisney}
                 />
                 /* {
                  disney.map(disney => 
                  <Disney 
                   {...disney}
                   key={disney._id}
                   deleteDisney={deleteDisney}
                   editDisney={editDisney}
                  />)
                 } */                            
            
      ))
      return (
      
            <div className="char-home" >
               <h1 className="char-h1">Disney Characters</h1>
                  
               <form onSubmit={handleSubmit} className="character-input">
               <input 
                  type="text"
                  name="name"
                  value={inputs.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="disney-input name"
               />
               <input 
                  text="text"
                  name="movie"
                  value={inputs.movie}
                  placeholder="Movie"
                  onChange={handleChange}
                  className="disney-input movie"              
               />
               <input
                  text="text"
                  name="song"
                  value={inputs.song}
                  placeholder="Song"
                  onChange={handleChange}
                  className="disney-input song"
               />
               <input 
                 text="text"
                 name="story"
                 value={inputs.story}
                 placeholder="Story"
                 onChange={handleChange}
                 className="disney-form story"          
               />
              <input
                text="text"
                name="imageUrl"
                value={inputs.imageUrl}
                placeholder="Picture"
                onChange={handleChange}
                className="disney-form" />
              <button className="disney-add">{props.btnText}</button>
         </form>
         {characterElements}
         </div>
      )
}

export default Characters