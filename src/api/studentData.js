import axios from "axios";


export const fetchStudents = async () => {

    try {

      const { data } = await axios.get('https://6883417e21fa24876a9d50f5.mockapi.io/students')
      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }


  export const fetchStudentDetails = async (id) => {

    try {

      const { data } = await axios.get(`https://6883417e21fa24876a9d50f5.mockapi.io/students/${id}`)
      //console.log({data});
      return data
    }
    catch (error) {
      console.log(error);

    }
  }

  export const fetchStudentById = async (id) => {
  const res = await fetch(`https://6883417e21fa24876a9d50f5.mockapi.io/students/${id}`);
  return await res.json();
}


  export const addStudent = async (studentData) => {
  try {
    const { data } = await axios.post('https://6883417e21fa24876a9d50f5.mockapi.io/students', studentData);
    return data;
  } catch (error) {
    console.error('Error adding student:', error);
  }
}


export const updateStudent = async (id, updatedData) => {
  try {
    const { data } = await axios.put(`https://6883417e21fa24876a9d50f5.mockapi.io/students/${id}`, updatedData);
    return data;
  } catch (error) {
    console.error('Error updating student:', error);
  }
}


export const deleteStudent = async (id) => {
  try {
    await axios.delete(`https://6883417e21fa24876a9d50f5.mockapi.io/students/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting student:', error);
  }
}


