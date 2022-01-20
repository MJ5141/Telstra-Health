import React, {useState, useEffect} from 'react';
import { db } from '../Firebase-config';
import './Home.css';


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPatients=async()=>{
      const usersCollectionRef = db.collection("patients");
      usersCollectionRef.get().then(s => {
        let patientArray = []

        s.forEach( singleProduct => {
          const product = singleProduct._delegate._document.data.value.mapValue.fields

          if(product !== undefined ) {
              patientArray.push(product)
          }
        })
        setData( patientArray );
      })

  }
    fetchPatients();

  }, [])




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
