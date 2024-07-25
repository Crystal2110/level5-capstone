import React, { useState, useContext} from "react"
import { DataContext } from "../dataContext";
import CharacterList from "./CharacterList"
import AddDisneyForm from "./AddDisneyForm"


function Characters(props) {
      const {disney, addDisney,deleteDisney} = useContext(DataContext)

      // const initInputs = {
      //  name: "",
      //  movie: "",
      //  song: "",
      //  story: "",
      //  imageUrl: ""
      // }

      // const [inputs, setInputs] = useState(initInputs)

     //  function handleChange(e) {
     //   const { name, value,} = e.target
     //   setInputs(prevInputs => ({
     //    ...prevInputs,
     //    [name]: value,
     //   }));
     // }

     // function handleSubmit(e){
     //  e.preventDefault()
     //  props.submit(inputs, props._id)
     //  setInputs(initInputs)
     //  if(props.toggleEdit) {
     //    props.toggleEdit();
     //  }
     // }

      const characterElements = disney.map(char => (
         
                 <CharacterList
                     key = {char._id}
                     {...char}
                  />
                 // deleteDisney={deleteDisney}
                 // editDisney={editDisney}
                 // submit={addDisney}
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
            <AddDisneyForm 
                submit={addDisney}
                btn={props.btnText}
            />
         {characterElements}
         </div>
      )
}

export default Characters