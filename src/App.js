// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const product = ["mobile", "laptop", "tv"];
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      {users.map((us) => {
        return <User name={us.name} email={us.email}></User>;
      })}
      <header></header>
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h2>name:{props.name}</h2>
      <h2>email:{props.email}</h2>
    </div>
  );
}

// function Product(props) {
//   return <h2>product list:{props.name}</h2>;
// }

// function First() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>this is first count: {count}</h3>
//       <Second cnt={count}></Second>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         counter
//       </button>
//     </div>
//   );
// }

// function Second(props) {
//   return <h2>this is second count: {props.cnt} </h2>;
// }

export default App;
