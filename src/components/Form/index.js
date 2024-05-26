import "./Form.css";
import { default as TextField } from "../TextField/";
import { default as DropDownList } from "../DropDownList";
import Button from "../Button";
export default function Form() {
  const teams = ["Lorem", "Ipsom", "Lipsom"];
  const save = () => {};
  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do coloborador</h2>
        <TextField label="Nome" />
        <TextField label="Cargo" />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
        <DropDownList label="Team" item={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
