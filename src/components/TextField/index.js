import "./TextField.css";
export default function TextField(field) {
  let content;
  field.placeholder === undefined
    ? (content = "Digite seu " + field.label)
    : (content = field.placeholder);

  const change = (event) => {
    field.onChange(event.target.value);
  };
  return (
    <div className={`text-field-${field.type ? field.type : ""}`}>
      <label>{field.label}</label>
      <input
        type={field.type ? field.type : "text"}
        value={field.value}
        onChange={change}
        required={field.required}
        placeholder={content}
      />
    </div>
  );
}
