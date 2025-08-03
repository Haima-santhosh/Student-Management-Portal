import React from 'react'
import { PiUserListFill } from "react-icons/pi";
import StudentCard from '../components/StudentCard';

StudentCard


const StudentListPage = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto'>
      
      <h1 className="text-blue-800 flex items-center mb-10 gap-4 justify-center font-bold text-5xl border rounded-lg shadow-inner mt-10 p-4 bg-slate-200">
  <PiUserListFill className="text-7xl text-blue-800" />
  Student List
</h1>

<StudentCard />



    </div>
  )
}

export default StudentListPage