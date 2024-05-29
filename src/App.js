import { useState } from "react";
import { Banner, Form } from "./components";
import Team from "./components/Teams";

function App() {
  const teams = [
    {
      color: "#57C278",
      secondaryColor: "#D9F7E9",
      name: "Lorem",
    },
    {
      color: "#82CFFA",
      secondaryColor: "#E8F8FF",
      name: "Ipsum",
    },
    {
      color: "#fcba03",
      secondaryColor: "#ffd04d",
      name: "Limpsom",
    },
  ];
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Form
          teamsName={teams.map((team) => team.name)}
          newUsr={(usr) => {
            setUser([...user, usr]);
          }}
        />
        {teams.map((team) => (
          <Team
            key={team.nome}
            name={team.name}
            color={team.color}
            secondaryColor={team.secondaryColor}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
