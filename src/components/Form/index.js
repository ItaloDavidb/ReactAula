import "./Form.css";
import { default as TextField } from "../TextField/";
import { default as DropDownList } from "../DropDownList";
import Button from "../Button";
import { useState } from "react";
export default function Form(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const save = (event) => {
    event.preventDefault();
    props.newUsr({
      name,
      role,
      image,
      team,
    });
  };

  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do coloborador</h2>
        <TextField
          required={true}
          label="Nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          value={role}
          onChange={(value) => setRole(value)}
        />
        <TextField
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <DropDownList
          value={team}
          onChange={(value) => setTeam(value)}
          required={true}
          label="Team"
          item={props.teamsName}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
