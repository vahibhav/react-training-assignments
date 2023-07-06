import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

const ShowStudent = () => {
  const [students, setStudents] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:3001/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (id) => {
    setEditingStudentId(id);
  };

  const handleUpdate = (updatedStudent) => {
    setStudents((prevStudents) => {
      return prevStudents.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        }
        return student;
      });
    });
    setEditingStudentId(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(() => {
        console.log('Student deleted successfully');
        fetchStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    return (
      <div>
              <h2>Show Students</h2>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
                <td>{student.mobileNumber}</td>
                <td>
                  {editingStudentId === student.id ? (
                    <EditStudent student={student} onUpdate={handleUpdate} />
                  ) : (
                    <>
                      <button onClick={() => handleEdit(student.id)}>Edit</button>
                      <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    );
  }
  
  export default ShowStudent;