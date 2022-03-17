import React from 'react';

export default function UserCard(props) {
  console.log(props)

  return (
    <>
    <div className="card--container">
      <img className="card--image" src={props.value.picture.thumbnail} />
      <div>
        <h4>{props.value.name.first} {props.value.name.last}</h4>      
        <h5>{props.value.location.city}/{props.value.location.country}</h5>
      </div>     
      <a className="card--button" href={`mailTo:${props.value.email}`}>Send Mail</a>    
    </div>
  </>
  );
}


