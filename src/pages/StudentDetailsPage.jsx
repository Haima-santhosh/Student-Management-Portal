import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchStudentDetails } from '../api/studentData'

const StudentDetailsPage = () => {
  const [studentData, setStudentData] = useState(null)
  const { studId } = useParams()

  useEffect(() => {
    fetchStudentDetails(studId).then(data => {
      setStudentData(data)
    })
  }, [studId])

  if (!studentData) {
    return (
      <div className='h-screen flex justify-center items-center text-3xl font-extrabold text-blue-500'>
        Loading...
      </div>
    )
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 p-4'>
      <div className='w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-6'>
        <div className='flex flex-col items-center'>
          <img
            className='w-24 h-24 mb-4 rounded-full shadow'
            src={studentData.profile_image || '/default-avatar.png'}
            alt={studentData.name}
          />
          <h2 className='text-2xl font-bold text-gray-900 bg-slate-100 px-2'>{studentData.full_name}</h2>
          <p className='text-md text-gray-500 mt-1'>☎️ {studentData.phone || 'N/A'}</p>
          <p className='text-md text-gray-500'> 📩  {studentData.email || 'Email not available'}</p>
          <Link
            to='/students'
            className='mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200'
          >
            Back To Student List
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentDetailsPage
