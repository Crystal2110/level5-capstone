import React, {useState, useEffect} from "react"
// import {DataContext}from "../dataContext"

export default function AddMovieForm(props) {
 const initInputs = { 
   title: props.title || "",
   description: props.description || "",
   genre: props.genre || "",
   author: props. author|| "",
   imageUrl: props.imageUrl || "",
 }

 const [inputs, setInputs] = useState(initInputs)

 useEffect(() => {
  setInputs({
   title: props.title || "",
   description: props.description || "",
   genre: props.genre || "",
   author: props.author || "",
   imageUrl: props.imageUrl || "",
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
   props.submit(inputs, props._id);
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
     name="title"
     value={inputs.title}
     placeholder="Title"
     onChange={handleChange}
     className="disney-input title"
  />
  <input 
     text="text"
     name="description"
     value={inputs.description}
     placeholder="Description"
     onChange={handleChange}
     className="disney-input description"              
  />
  <input
     text="text"
     name="genre"
     value={inputs.genre}
     placeholder="Genre"
     onChange={handleChange}
     className="disney-input genre"
  />
  <input 
    text="text"
    name="author"
    value={inputs.author}
    placeholder="Author"
    onChange={handleChange}
    className="disney-form author"          
  />
  <input
    text="text"
    name="imageUrl"
    value={inputs.imageUrl}
    placeholder="Picture"
    onChange={handleChange}
    className="disney-form imageUrl" />
 <button className="disney-add">Add Movie</button>
</form>

</div>
 )
}