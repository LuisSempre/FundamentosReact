export function Card(props) {
  return (
    <div className="flex items-center justify-between">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
