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
        <h3
          style={{
            borderColor: props.color,
          }}
        >
          {props.name}
        </h3>
        <div className="usr">
          {props.usr.map((user) => (
            <Card
              usrName={user.name}
              usrCargo={user.role}
              usrImage={user.image}
              usrTeam={user.team}
              usrColor={props.color}
            />
          ))}
        </div>
      </section>
    )
  );
}
