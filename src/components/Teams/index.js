import "./Teams.css";

export default function Team(props) {
  return (
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
    </section>
  );
}
