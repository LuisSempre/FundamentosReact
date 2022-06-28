import { Card } from "../components/Card";

export function Home() {
  return (
    <div className="w-full h-screen grid space-x-2 items-center justify-center">
      <h1>Lista</h1>
      <input className="px-4 py-2 rounded bg-white" type="text" placeholder="digite" />
      <button>Add</button>
      <div>
        <Card />
      </div>
    </div>
  );
}
