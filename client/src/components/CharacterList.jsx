import React from "react"
// import { DataContext } from "../dataContext"
import {useNavigate} from "react-router-dom"

export default function CharacterList(props) {
// const{disney} = useContext(DataContext)


      // useEffect(() => {
      //   setInputs({
      //      name: props.name || "",
      //      movie: props.movie || "",
      //      song: props.song || "",
      //      story: props.story || "",
      //      imageUrl: props.imageUrl || ""
      //   })
      // }, [props]);



      const navigate = useNavigate()

      function handleClick(){
         navigate(`/characters/${props._id}`)
      }

      // const {disneyData, setDisneyData} = useContext(DataContext)


return (
      <div className="character-container">
        <div onClick={handleClick} className="character-page">
        <img src={props.imageUrl} alt={props.name} className="character-image" />
        <p className="character-name">{props.name}</p>

        </div>
    </div>
  );

}