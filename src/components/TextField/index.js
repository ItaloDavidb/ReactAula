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
    <div className="text-field">
      <label>{field.label}</label>
      <input
        value={field.value}
        onChange={change}
        required={field.required}
        placeholder={content}
      />
    </div>
  );
}
