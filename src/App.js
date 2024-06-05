import { useState } from "react";
import { Banner, Form, Team } from "./components";
import { v4 as uuidV4 } from "uuid";
function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidV4(),
      color: "#57C278",
      secondaryColor: "#D9F7E9",
      name: "Lorem",
    },
    {
      id: uuidV4(),
      color: "#82CFFA",
      secondaryColor: "#E8F8FF",
      name: "Ipsum",
    },
    {
      id: uuidV4(),
      color: "#fcba03",
      secondaryColor: "#ffd04d",
      name: "Limpsom",
    },
  ]);
  const [user, setUser] = useState([]);
  function deleteCard(id) {
    setUser(user.filter((usr) => usr.id !== id));
  }
  function changeTeamColor(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.secondaryColor = color;
        }
        return team;
      }),
    );
  }
  return (
    <div key={"app"} className="App">
      <header key={"header"} className="App-header">
        <Banner key={"banner"} />
        <Form
          key="form"
          teamsName={teams.map((team) => team.name)}
          newUsr={(usr) => {
            const newUser = { ...usr, id: uuidV4() }; // Adiciona um ID único ao novo usuário
            setUser([...user, newUser]);
          }}
        />
        {teams.map((team) => (
          <Team
            key={team.id}
            id={team.id}
            name={team.name}
            color={team.color}
            secondaryColor={team.secondaryColor}
            usr={user.filter((user) => user.team === team.name)}
            onDelete={deleteCard}
            changeColor={changeTeamColor}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
