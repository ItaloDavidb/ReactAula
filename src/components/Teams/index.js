import Card from "../Card";
import "./Teams.css";

export default function Team(props) {
  return (
    props.usr.length > 0 && (
      <section
        style={{
          backgroundColor: props.secondaryColor,
        }}
        className="team"
      >
        <input
          value={props.secondaryColor}
          type="color"
          className="input-color"
          onChange={(event) => props.changeColor(event.target.value, props.id)}
        />
        <h3
          style={{
            borderColor: props.color,
          }}
        >
          {props.name}
        </h3>
        <div className="usr">
          {console.log(props.usr)}
          {props.usr.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              usrFavorite={user.favorite}
              usrName={user.name}
              usrCargo={user.role}
              usrImage={user.image}
              usrTeam={user.team}
              usrColor={props.color}
              onDelete={props.onDelete}
              favorites={props.favorites}
            />
          ))}
        </div>
      </section>
    )
  );
}
