import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Document from './components/Document';

function App() {
  const [userPersonArray, setUserPersonArray] = useState('');
  const [userEducationArray, setUserEducationArray] = useState([]);
  const [userExperienceArray, setUserExperienceArray] = useState([]);

  return (
    <>
      <div id='main-container'>
        <div id='navbar'>
          <Navbar
              // information array
              personArray={userPersonArray}
              setPersonArray={setUserPersonArray}

              // education array
              educationArray={userEducationArray}
              setEducationArray={setUserEducationArray}

              // experience array
              experienceArray={userExperienceArray}
              setExperienceArray={setUserExperienceArray}
          />
        </div>
        
        <div id='cv-container'>
          <h1 id='header'>CV Application</h1>
          <hr />
          <hr />
          <div id='cv-form'>
            <Document 
                personArray={userPersonArray}
                educationArray={userEducationArray}
                experienceArray={userExperienceArray}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
