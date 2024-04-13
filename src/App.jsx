import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Document from './components/Document';

function App() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [userSchool, setUserSchool] = useState('');
  const [userMajor, setUserMajor] = useState('');
  const [userGraduationDate, setUserGraduationDate] = useState('');

  // A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
  const [userCompany, setUserCompany] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userStartDate, setUserStartDate] = useState('');
  const [userEndDate, setUserEndDate] = useState('');
  const [userResponsibilities, setUserResponsibilities] = useState('');

  return (
    <>
      <div id='main-container'>
        <div id='navbar'>
          <Navbar
              // personal information
              setName={setUserName} 
              setEmail={setUserEmail} 
              setPhone={setUserPhone}

              // education
              setSchool={setUserSchool}
              setMajor={setUserMajor}
              setGraduationDate={setUserGraduationDate}

              // experience
              setCompany={setUserCompany}
              setPosition={setUserPosition}
              setStartDate={setUserStartDate}
              setEndDate={setUserEndDate}
              setResponsibilities={setUserResponsibilities}
          />
        </div>
        
        <div id='cv-container'>
          <h1 id='header'>CV Application</h1>
          <hr />
          <hr />
          <div id='cv-form'>
            <Document 
                // personal information
                name={userName} 
                email={userEmail} 
                phone={userPhone} 
                
                // education
                school={userSchool} 
                major={userMajor} 
                graduationDate={userGraduationDate}

                // experience
                company={userCompany}
                position={userPosition}
                startDate={userStartDate}
                endDate={userEndDate}
                responsibilities={userResponsibilities}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
