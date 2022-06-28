import { useState, useEffect } from "react";
import { Card } from "../components/Card";

export function Home() {
  const [student, setStudent] = useState("Student");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''})

  function studentAdd() {
    const newStudent = {
      name: student,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
    const response = await fetch('https://api.github.com/users/luissempre')
    const data = await response.json()
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
    }
    fetchData()
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen space-x-2">
      <div>
        <h1>Lista</h1>
        <div className="flex items-center justify-center">
          <strong>{user.name}</strong>
          <img className="w-16 h-16 rounded-full" src={user.avatar} alt="Img" />
        </div>
        <input
          onChange={(e) => setStudent(e.target.value)}
          className="px-4 py-2 text-black bg-white rounded"
          type="text"
          placeholder="digite"
        />
      </div>
      <div className="space-y-4">
        <button 
        className="px-4 py-2 font-bold bg-purple-500 rounded-full"
        onClick={studentAdd}>Add</button>
        {students.map((student) => (
          <Card
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))}
      </div>
    </div>
  );
}