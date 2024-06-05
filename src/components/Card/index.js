import "./Card.css";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Card(props) {
  return (
    <div className="colaborador">
      <IoCloseCircleSharp
        size={25}
        className="delete"
        onClick={() => props.onDelete(props.id)}
      />
      <div
        className="cabecalho"
        style={{
          backgroundColor: props.usrColor,
        }}
      >
        <img src={props.usrImage} alt="" />
      </div>
      <div className="rodape">
        <h4>{props.usrName}</h4>
        <h5>{props.usrCargo}</h5>
      </div>
    </div>
  );
}
