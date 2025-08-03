import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import StudentListPage from './pages/StudentListPage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import StudentForm from './pages/StudentForm'








function App() {
 

  return (
  <Routes>
  <Route path="/" element={<Navigate to="/students" />} />

  <Route path="students" element={<MainLayout />}>
    <Route index element={<StudentListPage />} />
    <Route path=":studId" element={<StudentDetailsPage />} />
    <Route path="form" element={<StudentForm />} />
     <Route path="form/:studId" element={<StudentForm />} />
  </Route>
</Routes>


  )
}

export default App
