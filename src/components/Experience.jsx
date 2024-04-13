/* eslint-disable react/prop-types */
import Input from "./Input";
import Textarea from "./Textarea";

function Experience({ setCompany, setPosition, setStartDate, setEndDate, setResponsibilities }) {
    return (
        <>
            <Input change={setCompany} title='Company Name' phText='Company' type='text' />
            <Input change={setPosition} title='Employee Title' phText='Position' type='text' />
            <Input change={setStartDate} title='Start Date' type='date' />
            <Input change={setEndDate} title='End Date' type='date' />
            <Textarea change={setResponsibilities} title='Main Responsibilities' phText='Enter in List Form' type='text' rows='7' cols='20' />


        </>
    )
}

export default Experience