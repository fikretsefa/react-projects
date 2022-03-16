
import React from 'react';

export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
  }


  return (
    <>
      <div 
        className='dice-face'
        style={styles}
        onClick={props.holdDice}
        >
        <h1 className='dice-num'>{props.value}</h1>
      </div>
    </>
  );
}

