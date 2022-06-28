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
  };
  setStudents([newStudent]);
}
  return (
    <div className="grid items-center justify-center w-full h-screen space-x-2">
      <h1>Lista {student} </h1>
      <input 
        onChange={ e => setStudent(e.target.value)}
        className="px-4 py-2 text-black bg-white rounded" 
        type="text" 
        placeholder="digite" />
      <button>Add</button>
      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }
    </div>
  );
}
