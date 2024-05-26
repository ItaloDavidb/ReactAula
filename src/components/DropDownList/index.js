import "./DropDownList.css";
export default function DropDownList(props) {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select>
        {props.item.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
