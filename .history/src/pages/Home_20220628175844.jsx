import { useState } from "react";
import { Card } from "../components/Card";

export function Home() {
const [student, setStudent ] = useState()


  return (
    <div className="w-full h-screen grid space-x-2 items-center justify-center">
      <h1>Lista {student} </h1>
      <input 
        onChange={ e => setStudent(e.target.value)}
        className="px-4 py-2 rounded bg-white text-black" 
        type="text" 
        placeholder="digite" />
      <button>Add</button>
        <Card name="Luis" time="00:00:00"/>
        <Card name="Lucas" time="11:11:11"/>
    </div>
  );
}
