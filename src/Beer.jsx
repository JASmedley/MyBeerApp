import React, {useState} from 'react'


function Beer(props) {

  const [isLiked,setIsLiked] = useState(false);

  return (
  <li  className="beer"> 
        <h2 >{props.name}</h2>
        <p>
        <b>ABV:</b> {props.abv}
        </p>
        <p>
        <b>Tips:</b> {props.tips}
        </p>
        <p>
        <b>Description:</b> {props.description}
        </p>
       <img src={props.image} class="image"></img>
       <br></br>
       <button onClick={()=> setIsLiked(!isLiked)}>{
        isLiked === true ? "Liked ♥": "Like ♡"
       }</button>
  </li>
  );
}

export default Beer;