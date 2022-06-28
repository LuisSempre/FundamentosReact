export function Home() {
  return (
    <div className="w-full h-screen bg-black flex  space-x-2 items-center justify-center text-white">
      <h1>Lista</h1>
      <input className="px-4 py-2 rounded" type="text" placeholder="digite" />
      <button>Add</button>

      <Card />      
    </div>
  );
}
