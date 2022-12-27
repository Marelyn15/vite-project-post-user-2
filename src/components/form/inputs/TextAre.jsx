export function TextArea({ ...props }) {
  return (
    <div>
      <label>{props.title}</label>
      <input {...props} />
      <br />
    </div>
  );
}
