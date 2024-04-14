/* eslint-disable react/prop-types */
// import { useState } from "react"
import Person from "./Person"
import Education from "./Education"
import Experience from "./Experience"

function Navbar({ 
    personArray,
    setPersonArray,

    educationArray,
    setEducationArray,

    experienceArray,
    setExperienceArray,
}) {


    return (
        <div>
            <h1>Personal Information</h1>
            <Person 
                personArray={personArray}
                setPersonArray={setPersonArray}
            />
            
            <h1>Education</h1>
            <Education 
                educationArray={educationArray}
                setEducationArray={setEducationArray}
            />

            <h1>Experience</h1>
            <Experience 


                experienceArray={experienceArray}
                setExperienceArray={setExperienceArray}



            />


        </div>
    )
}

export default Navbar