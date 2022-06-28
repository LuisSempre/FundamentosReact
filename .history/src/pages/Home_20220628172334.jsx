export function Home() {
  return (
    <div className="min-h-screen bg-black flex space-x-4 items-center justify-center text-white">
      <div>
        <h1>Lista</h1>
      </div>
      <div>
        <input className="px-2 py4" type="text" placeholder="digite" />
      </div>
      <div>
        <button>Add</button>
      </div>
    </div>
  );
}
