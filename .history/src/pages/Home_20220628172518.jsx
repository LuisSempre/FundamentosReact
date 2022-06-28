export function Home() {
  return (
    <div className=" w-full h-full bg-black grid items-center justify-center text-white">
      <div>
        <h1>Lista</h1>
      </div>
      <div>
        <input className="px-4 py-2 rounded" type="text" placeholder="digite" />
      </div>
      <div>
        <button>Add</button>
      </div>
    </div>
  );
}
