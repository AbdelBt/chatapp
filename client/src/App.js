import { useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import Chat from './Chat';

const socket = io.connect("https://chatapp-bex0.onrender.com")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }
  return (
    <div className="App">

      {!showChat ? (
        <div className="joinChatContainer" >
          <h3> Join a room </h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <select
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          >
            <option value="">Select a room </option>
            <option value="room1">ROOM 1</option>
            <option value="room2">ROOM 2</option>
            <option value="room3">ROOM 3</option>
          </select>

          <button onClick={joinRoom}> start chatting</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      <div className="background-image"></div>

    </div>
  );
}

export default App;
