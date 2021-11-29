import React,{useState} from 'react';

function AddFriend({addFriend}) {
    const [value, setValue] = useState("");

  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addFriend(value);
      setValue("");
  }
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              className="input"
              value={value}
              placeholder="Add a new friend"
              onChange={e => setValue(e.target.value)}
          />
        <button onClick={handleSubmit}>Add Friend</button>
      </form>
  );
}

export default AddFriend;