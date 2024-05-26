import './TextField.css'
export default function TextField(field) {
  let content;
  field.placeholder === undefined ? content = 'Digite seu ' + field.label : content = field.placeholder;
  return (
    <div className='text-field'>
      <label>{field.label}</label>
      <input placeholder={content} />
    </div>
  )
}
