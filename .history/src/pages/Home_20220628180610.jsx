import { useState } from "react";
import { Card } from "../components/Card";

export function Home() {
const [student, setStudent ] = useState('Student')
const [students, setStudents ] = useState([])

function studentAdd() {
  const newStudent = {
    name: setStudent,
    time: new Date().toLocaleDateString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }
}
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
        students.map(student => <Card name={student.name} time={student.time} />)
      }
    </div>
  );
}
