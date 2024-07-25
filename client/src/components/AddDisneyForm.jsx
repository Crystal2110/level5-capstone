import React, {useState, useEffect} from "react"
// import {DataContext}from "../dataContext"

export default function AddDisneyForm(props) {
 const initInputs = { 
 name: props.name || "",
 movie: props.movie || "",
 song: props.song,
 story: props.story || "",
 imageUrl: props.imageUrl || ""
 }

 const [inputs, setInputs] = useState(initInputs)

 useEffect(() => {
  setInputs({
    name: props.name || "",
    movie: props.movie || "",
    song: props.song,
    story: props.story || "",
    imageUrl: props.imageUrl || ""
  });
}, [props]);

 function handleChange(e) {
   const { name, value } = e.target
   setInputs(prevInputs => ({
       ...prevInputs,
       [name]: value,
   }));
 }

 function handleSubmit(e){
  e.preventDefault();
  if (props.submit) {  
    props.submit(inputs, props._id);
  } else {
    console.error("submit function not provided");
  }
   setInputs(initInputs)
   if (props.toggleEdit) {
    props.toggleEdit();
   }
   }
 return (
          
  <div className="char-home" >
     
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
      <button className="disney-add">Add Character</button>
    </form>
</div>
 )
}