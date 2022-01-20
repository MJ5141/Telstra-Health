import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEdit.css';
import { db } from '../Firebase-config';
import {toast} from 'react-toastify';

const initialState = {
  firstName: '',
  familyName: '',
  contact: '',
  email: '',
  address: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  bloodGroup: ''
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { firstName, familyName, contact, email, address, age, gender, height, weight, bloodGroup } = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!firstName || !familyName || !contact || !email || !address || !age || !gender || !height || !weight || !bloodGroup){
      toast.error("Please fill in all the fields!");
    } else {
      const data = await db.collection("patients").add(state);
      if (data) {
        toast.success("Patient added to system successfully");
      } else {
        toast.error("Failure!");
      }
      navigate('/');
    }
  };


  return (
    <div style={{marginTop: "100px"}}>
      <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignontent: "center"}} onSubmit={handleSubmit}>

      <label htmlFor="firstName">First Name </label>
      <input type="text" id="firstName" name="firstName" placeholder="John" value={firstName} onChange={handleInputChange}/>

      <label htmlFor="familyName">Family Name </label>
      <input type="text" id="familyName" name="familyName" placeholder="Smith" value={familyName} onChange={handleInputChange}/>

      <label htmlFor="contact"> Contact Number </label>
      <input type="text" id="contact" name="contact" placeholder="0444 444 444" value={contact} onChange={handleInputChange}/>

      <label htmlFor="email"> Email Address </label>
      <input type="email" id="email" name="email" placeholder="abc@xyz.com" value={email} onChange={handleInputChange}/>

      <label htmlFor="address"> Address </label>
      <input type="text" id="address" name="address" placeholder="12 Danger Dr, Melb" value={address} onChange={handleInputChange}/>

      <label htmlFor="age"> Age </label>
      <input type="number" id="age" name="age" placeholder="25" value={age} onChange={handleInputChange}/>

      <label htmlFor="gender"> Sex </label>
      <input type="text" id="gender" name="gender" placeholder="Male" value={gender} onChange={handleInputChange}/>

      <label htmlFor="height"> Height </label>
      <input type="number" id="height" name="height" placeholder="Height in cm" value={height} onChange={handleInputChange}/>

      <label htmlFor="weight"> Weight </label>
      <input type="number" id="weight" name="weight" placeholder="Weight in kg" value={weight} onChange={handleInputChange}/>

      <label htmlFor="bloodGroup"> Blood Group </label>
      <input type="text" id="bloodGroup" name="bloodGroup" placeholder="A+" value={bloodGroup} onChange={handleInputChange}/>

      <input type="submit" value="Add New Patient" />

      </form>
    </div>
  );
};

export default AddEdit;
