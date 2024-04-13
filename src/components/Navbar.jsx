/* eslint-disable react/prop-types */
// import { useState } from "react"
import Person from "./Person"
import Education from "./Education"
import Experience from "./Experience"

function Navbar({ setName, setEmail, setPhone, setSchool, setMajor, setGraduationDate, setCompany, setPosition, setStartDate, setEndDate, setResponsibilities }) {


    return (
        <div>
            <h1>Personal Information</h1>
            <Person 
                setName={setName} 
                setEmail={setEmail} 
                setPhone={setPhone}
            />
            
            <h1>Education</h1>
            <Education 
                setSchool={setSchool} 
                setMajor={setMajor} 
                setGraduationDate={setGraduationDate}
            />

            <h1>Experience</h1>
            <Experience 
                setCompany={setCompany}
                setPosition={setPosition}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setResponsibilities={setResponsibilities}
            />


        </div>
    )
}

export default Navbar