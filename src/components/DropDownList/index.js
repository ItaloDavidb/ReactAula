import "./DropDownList.css";
export default function DropDownList(props) {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.onChange(evento.target.value)}
        value={props.value}
        required={props.required}
      >
        {props.item.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
