// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const obj = [
    { name: "Mobile", price: 10000, brand: "vivo" },
    { name: "tv", price: 12000, brand: "walton" },
    { name: "computer", price: 30000, brand: "asus" },
  ];
  return (
    <div className="App">
      <Phone></Phone>
      <Users></Users>
      <header>
        <ul>
          {obj.map((fr) => (
            <div>
              <li>{fr.name}</li>
              <li>{fr.price}</li>
              <li>{fr.brand}</li>
            </div>
          ))}
        </ul>
        {obj.map((phone) => (
          <Mobile objs={phone}></Mobile>
        ))}
        <Mobile objs={obj[0]}></Mobile>
        <Mobile objs={obj[1]}></Mobile>
        <Mobile objs={obj[2]}></Mobile>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });

  return (
    <div>
      <h2>dynamic users: {users.length} </h2>
      <ul>
        {users.map((loop) => (
          <li>{loop.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Phone() {
  // const select = document.getElementById("btn");
  // select.addEventListener("click", function () {
  //   console.log("clicked");
  // });

  let [mobile, mobFunc] = useState(10);
  return (
    <div>
      <h1>Quantity: {mobile}</h1>
      <button
        onClick={() => {
          mobFunc(mobile + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          mobFunc(mobile - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

function Mobile(props) {
  const { name, price, brand } = props.objs;
  const a = {
    border: "2px solid red",
    width: "400px",
    margin: "20px",
  };
  return (
    <div style={a}>
      <p>phone: {name}</p>
      <p>price: {price}</p>
      <p>brand: {brand}</p>
    </div>
  );
}

export default App;
