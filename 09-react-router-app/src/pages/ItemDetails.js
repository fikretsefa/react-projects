
import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function ItemDetails() {
    let { id } = useParams();

    React.useEffect(() => {
        fetchItems();
        
        console.log(id);
      }, []);
  
    const [item, setItem] = React.useState([]);
    const [items, setItems] = React.useState([]);
    
    const fetchItems = async () => {
        const data = await fetch('https://api.publicapis.org/entries');
        const item = await data.json();
        setItems(item.entries)
        console.log(item.entries)
      }
   

  return (
    <>
      <h1>Item Details:</h1>
      {items.map(item => item.API === id && (
          <>
          <h1>{item.API}</h1>
          <h1>{item.Description}</h1>
          <Link to={item.Link}>{item.Link}</Link>
          </>
        ))}
    </>
  );
}


