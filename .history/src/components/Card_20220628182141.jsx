export function Card(props) {
  return (
    <div className="flex items-center justify-between px-2 bg-green-500">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
