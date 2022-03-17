import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import UserCard from './components/UserCard'
import axios from 'axios'


export default function App() {
  const [users,setUsers] = React.useState([]);


  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5")
    setUsers(response.data.results);
   
  }


  React.useEffect(() => {
    fetchUsers();
    console.log("useEffect is ran!");
  },[])

  const userElements = users.map((user,idx) => <UserCard value={user} key={idx} />);
  return (
    <>
    <Header />
    <main className="app">
      {userElements}
      
    </main>
    <Footer />
    </>
    
  );
}


