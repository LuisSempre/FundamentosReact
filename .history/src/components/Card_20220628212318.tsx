type CardProps = {
  name: string;
  time: string;
}


export function Card(props: CardProps) {
  return (
    <div className="flex items-center justify-between">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
