
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Shop() {

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await fetch('https://api.publicapis.org/entries');
    const item = await data.json();
    setItems(item.entries)
    console.log(item.entries)
  }

  return (
    <>
      <h1>API Shop</h1>
      
        {items.map(item => (
          <h1 key={uuidv4()}>
            <Link to={'shop'}>{item.API}</Link>
          </h1>
        ))}
    </>
  );
}


