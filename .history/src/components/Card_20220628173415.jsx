export function Card(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
