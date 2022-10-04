import { createContext, Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";

const UserContext = createContext();

function UserWrapper({ children }) {
  const user = {
    username: "asem",
    from: "Syria",
    livesIn: "Berlin",
    age: 38,
    speaks: [
      "english",
      "syrian dialect",
      "arabic",
      "deutschland dialect",
      "enough",
      "for",
      "nowish",
    ],
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

function App() {
  const [count, setCount] = useState(0);
  // PRETEND LIKE THIS IS STATE
  const user = {
    username: "asem",
    from: "Syria",
    livesIn: "Berlin",
    age: 38,
    speaks: [
      "english",
      "syrian dialect",
      "arabic",
      "deutschland dialect",
      "enough",
      "for",
      "nowish",
    ],
  };

  return (
    <UserWrapper>
      <Navbar username={user.username} />
      <HomePage username={user.username} />
    </UserWrapper>
  );
}

export default App;
