import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        dob: '',
        gender: '',
        address: '',
        mobileNumber: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/students', student)
          .then((response) => {
            console.log(response.data); // Student added successfully
            setStudent({
              name: '',
              dob: '',
              gender: '',
              address: '',
              mobileNumber: '',
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };
      return (
        <div>
          <h2>Add Student</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={student.name} onChange={handleChange} required />
            </label>
            <label>
              Date of Birth:
              <input type="date" name="dob" value={student.dob} onChange={handleChange} required />
            </label>

                    <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={student.gender === 'Male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={student.gender === 'Female'}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Don't Want to Specify"
              checked={student.gender === "Don't Want to Specify"}
              onChange={handleChange}
              required
            />
            Don't Want to Specify
          </label>
        </div>
            <label>
              Address:
              <input type="text" name="address" value={student.address} onChange={handleChange} required />
            </label>
            <label>
              Mobile Number:
              <input type="number" name="mobileNumber" value={student.mobileNumber} onChange={handleChange} required />
            </label>
            <button type="submit">Add Student</button>
          </form>
        </div>
      );
    }

export default AddStudent
