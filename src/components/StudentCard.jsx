import React, { useEffect, useState } from 'react'
import { deleteStudent, fetchStudents } from '../api/studentData'
import { useNavigate } from 'react-router-dom'


const StudentCard = () => {

 const [students,setStudents]=useState([])
 const navigate = useNavigate()
  
 useEffect(()=>
{
    (async()=>
    {
        const studentData=await fetchStudents()
        setStudents(studentData)
    })()

},[])

//console.log(students);


const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student data?');

    if (confirmDelete) {
      const success = await deleteStudent(id);
      if (success) {
        alert('Student data deleted successfully!');
        setStudents((prev) => prev.filter((student) => student.id !== id));
      } else {
        alert('Failed to delete the student 😲 Try again later 😊');
      }
    }
  }


   if(students.length===0)
   {
    return(
      <div className='h-screen flex justify-center items-center text-3xl font-extrabold text-blue-500'>
        Loading...
      </div>
    )
   }


  return (
   
<>
<div className='flex justify-end mb-10'>
               <button onClick={() => navigate(`/students/form`)} className="px-4 py-2 text-md font-bold text-white bg-green-500 rounded hover:bg-green-600 transition">
                ➕ Add Students
              </button>
</div>



            <div className="min-h-screen relative overflow-x-auto shadow-md sm:rounded-lg">

            
    <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center shadow-inner">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Student name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map((student)=>(
             <tr key={student.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {student.full_name}
                </th>
                <td className="px-6 py-4">
                    {student.email}
                </td>
               
                <td className="px-6 py-4 space-x-2">
              <button onClick={()=>navigate(`${student.id}`)} className="px-4 py-2 text-md font-bold text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                View
              </button>
              <button onClick={()=>navigate(`/students/form/${student.id}`)}  className="px-4 py-2 text-md font-bold text-white bg-green-500 rounded hover:bg-green-600 transition">
                Edit
              </button>
              <button onClick={() => handleDelete(student.id)} className="px-4 py-2 text-md font-bold text-white bg-red-500 rounded hover:bg-red-600 transition">
              Delete
              </button>
            </td>
            </tr>
            ))}
            
            
            
            
        </tbody>
    </table>
</div>


</>

  )
}

export default StudentCard