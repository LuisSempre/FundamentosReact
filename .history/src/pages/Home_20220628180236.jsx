import { useState } from "react";
import { Card } from "../components/Card";

export function Home() {
const [student, setStudent ] = useState('Student')
const [students, setStudents ] = useState([])

  return (
    <div className="w-full h-screen grid space-x-2 items-center justify-center">
      <h1>Lista {student} </h1>
      <input 
        onChange={ e => setStudent(e.target.value)}
        className="px-4 py-2 rounded bg-white text-black" 
        type="text" 
        placeholder="digite" />
      <button>Add</button>
      {
        students.map(student => <Card name={student.name} time={student.time}/>)
      }
    </div>
  );
}
