/* eslint-disable react/prop-types */
import Input from "./Input"

function Education({ setSchool, setMajor, setGraduationDate }) {
    return (
        <>
            <Input change={setSchool} title='University' phText='School Name' type='text' />
            <Input change={setMajor} title='Major / Field of Study' phText='Major' type='text' />
            <Input change={setGraduationDate} title='Graduation Date' type='date' />
        </>
    )
}

export default Education