import { useState } from "react";
import { Banner, Form } from "./components";
import Team from "./components/Teams";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Form
          newUsr={(usr) => {
            setUser([...user, usr]);
          }}
        />
        <Team name={"Lorem"} />
      </header>
    </div>
  );
}

export default App;
