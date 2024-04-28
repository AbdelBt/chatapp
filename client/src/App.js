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
       <div className= "joinChatContainer" >
        <h3> Join a room =D</h3>
      <input 
      type="text" 
      placeholder="Niggeh..." 
      onChange={(event) => { 
        setUsername(event.target.value)
      }}
      />
         <input 
      type="text" 
      placeholder="Cama..." 
      onChange={(event) => { 
        setRoom(event.target.value)
      }}
      />
        <button onClick={joinRoom}> go in cama</button>
        </div>
       ) : (
        <Chat socket={socket} username={username} room={room}/>
        )}
                    <div className="background-image"></div>

    </div>
  );
}

export default App;
