import React, {useState, useEffect} from 'react';
import { db } from '../Firebase-config';
import { Link } from 'react-router-dom';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { collection } from "firebase/firestore";

const Home = () => {

  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, [])

  const fetchPatients=async()=>{
    usersCollectionRef.get().then(s => {
      let patientArray = []

      s.forEach( singleProduct => {
        const product = singleProduct._delegate._document.data.value.mapValue.fields

        if(product != undefined ) {
            patientArray.push(product)
        }
      })
      setData( patientArray );
    })

}

  const usersCollectionRef = db.collection("patients");
  // console.log(usersCollectionRef);



  return (
<>
<div> <h1> Patient List </h1> </div>
{data.map(patient =>

    <div className="box">
      <form >
        <div >
          <div >
            First Name: {patient.firstName.stringValue}
          </div>
          <div >
            Family Name: {patient.familyName.stringValue}
          </div>
          <div >
            Email: {patient.email.stringValue}
          </div>
          <div >
            Phone No.:{patient.contact.stringValue}
          </div>
          <div >
            Age: {patient.age.stringValue} Years
          </div>
          <div >
            Weight: {patient.weight.stringValue} Kg
          </div>
          <div >
            Height: {patient.height.stringValue} cm
          </div>
          <div >
            Address: {patient.address.stringValue}
          </div>
          <div >
            Blood Group: {patient.bloodGroup.stringValue}
          </div>
        </div>
        <div >
          <div >
            Gender: {patient.gender.stringValue}
          </div>
        </div>
      </form>
    </div>

    )}
      </>
  );
};

export default Home;
