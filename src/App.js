import React, { useState, useEffect }  from "react";
import './App.css';
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import { FcGenericSortingDesc } from "react-icons/fc";



function Todo() {
  
  const [friendList, setFriendList] = useState([
      {
          name: "Amol",
          favourite: false,
      },
      {
          name: "Aditya",
          favourite: true
      },
      {
          name: "Dhananjay",
          favourite: false
      }
  ]);


  const addFriend = name => {
      const newFriends = [...friendList, { name, favourite: false }];
      setFriendList(newFriends);
  };

  const addFavourite = index => {
      alert("Are you sure want to add in favourite list...")
      const newFriends = [...friendList];
      newFriends[index].favourite = true;
      setFriendList(newFriends);
  };

  const deleteFriend = index => {
      alert("Are you sure want to delete...")
      const newFriends = [...friendList];
      newFriends.splice(index, 1);
      setFriendList(newFriends);
  };

  //Search Friend by Name

  const [searchFriend, setSearchFriend] = React.useState("");

  const handleSearchChange = e => {
    setSearchFriend(e.target.value);
  };

  useEffect(() => {
    const results = friendList.filter(person =>
      person.name.toLowerCase().includes(searchFriend.toLowerCase())
    );
    setFriendList(results);
  }, [searchFriend]);

  const sortFavourite = () => {
      const sorted = friendList.slice().sort(function(firstUser, secondUser) { 
      if(firstUser.favourite < secondUser.favourite) return 1;
      if(firstUser.favourite > secondUser.favourite) return -1;
      return 0;
      });
      setFriendList(sorted)
  };



  return (
    <>
    <div className="to-do-app">
      <div class="header"><h1>Friends List</h1></div>
      <div className="create-new">
         <AddFriend addFriend={addFriend} />
      </div>
      <div className="create-new" style={{padding:10, width:'auto'}}>
          <form onSubmit = {(e) => e.preventDefault()} style={{textAlign:"initial"}}>
          <input
              type="text"
              placeholder="Search"
              value={searchFriend}
              onChange={handleSearchChange}
            />
            <button onClick={() => sortFavourite()} style={{padding: 9}}>Sort By <FcGenericSortingDesc style={{ fontSize:15 }} /> </button>
          </form>
      </div>
      <div className="items-list">
        {
          friendList.length == 0 ? "No friend found" 
          :
          <>
          {friendList.map((data, index) => (
            <FriendList
              data={data}
              index={index}
              addFavourite={addFavourite}
              deleteFriend={deleteFriend}
              sortFavourite={sortFavourite}
              key={index}
            />
        ))}
          </> 
        }
      </div>
    </div>
      
      </>
  );
}

export default Todo;
