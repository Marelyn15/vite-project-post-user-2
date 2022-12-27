export function TextInput({ ...props }) {
  return (
    <div>
      <label>{props.title}</label>
      <input {...props} />
    </div>
  );
}
