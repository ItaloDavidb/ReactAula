import "./Card.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Card(props) {
  function toFavorite() {
    props.favorites(props.id);
  }
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
        <div className="favorite">
          {console.log(props.usrFavorite)}
          {props.usrFavorite ? (
            <FaHeart onClick={toFavorite} color="red" />
          ) : (
            <FaRegHeart onClick={toFavorite} />
          )}
        </div>
      </div>
    </div>
  );
}
