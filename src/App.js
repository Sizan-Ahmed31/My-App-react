// import logo from "./logo.svg";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Name></Name>
      </header>
    </div>
  );
}

function Name() {
  const [user, setName] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setName(json));
  }, []);

  return (
    <div>
      <h2>
        <ul>
          {user.map((res) => (
            <li>{res.username}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default App;
