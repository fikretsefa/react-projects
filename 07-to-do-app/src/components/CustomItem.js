import React from 'react';

export default function CustomItem(props) {
  return (
    <>    
    <div className="row">
          <input type="checkbox" 
          onChange={props.markComplete} 
          checked={props.data.completed ? "checked" : ""}/>
          <p className="column column-90 custom--title">{props.data.title}</p>
          <a className="column column-10 button" onClick={props.deleteTodo}><i className="fa fa-trash" aria-hidden="true"></i></a>
      </div>
    </>
  );
}


