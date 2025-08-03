import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addStudent, fetchStudentById, updateStudent } from '../api/studentData';



const StudentForm = () => {

  const {studId} = useParams();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  profile_image: ""
});


useEffect(() => {
  if(studId)
(async ()=>
{
  const data = await fetchStudentById(studId)
  setFormData(data)
})()
}, [studId])

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }


 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (studId) {
      const confirmed = window.confirm('Do you want to update this student details?');
      if (!confirmed) return;

      await updateStudent(studId, formData);
      alert('Student data has been updated successfully!');
    } else {
      await addStudent(formData);
      alert('Student has been added successfully!');
    }
    navigate('/students');
  } catch (err) {
    console.error(err);
    alert('Failed to save student');
  }
};




  return (
     <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
       <h2 className="text-xl font-bold text-center"> {studId ? 'Edit Student' : 'Add Student'} </h2>

        <input type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required className="w-full px-4 py-2 border rounded"
        />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded"/>
        <input type="text" name="profile_image" placeholder="Profile Image URL" value={formData.profile_image} onChange={handleChange} required className="w-full px-4 py-2 border rounded"/>
         {formData.profile_image && (
          <div className="text-center">
            <img src={formData.profile_image} alt="Preview Image" className="mx-auto h-24 w-24 object-cover rounded-full border" 
            onError={(e) => {
              e.target.src =
                  'https://via.placeholder.com/100?text=Image+Invalid';
              }}
            />
          </div>
        )}
      <div className='flex justify-center'>
         <button type="submit" className="w-fit bg-green-500 text-white py-3 px-2 rounded font-bold hover:bg-green-600">{studId ? 'Update Student' : 'Add Student'}</button>
      </div>

       
      </form>
    </div>
  )
}

export default StudentForm