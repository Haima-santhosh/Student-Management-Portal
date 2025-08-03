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
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 to-blue-100 p-4'>
      <div className='w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 relative'>
        <div className='flex flex-col items-center text-center'>
          <img
            className='w-28 h-28 mb-4 rounded-full shadow-lg border-4 border-blue-200 hover:scale-105 transition-transform duration-300'
            src={studentData.profile_image || '/default-avatar.png'}
            alt={studentData.name}
          />
          <h2 className="text-2xl font-bold text-gray-800">{studentData.full_name}</h2>

          <div className="mt-4 w-full text-left space-y-2 border-t pt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">📞</span>
              <span className="text-md">{studentData.phone || 'Phone not available'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">📧</span>
              <span className="text-md">{studentData.email || 'Email not available'}</span>
            </div>
          </div>
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
