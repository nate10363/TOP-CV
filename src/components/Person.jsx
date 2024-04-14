/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "./Input";

function Person({ personArray, setPersonArray }) {

    function handlePersonArray() {
        setPersonArray( 
            {
                'name': document.getElementById('name-input').value,
                'email': document.getElementById('email-input').value,
                'phone': document.getElementById('phone-input').value,
            }

        )
    }

    function resetPerson() {
        setPersonArray('');
    }

    return (
        <>
            <Input className='person-input' id='name-input' title='Full Name' phText='name' type='text'/>
            <Input className='person-input' id='email-input' title='Email' phText='bobloblaw@loblaw.net' type='email' />
            <Input className='person-input' id='phone-input' title='Phone' phText='555-555-5555' type='tel' />
        
            <button
                className='add-btn'
                onClick={() => {
                        handlePersonArray();
                        clearInputs();
                    }
                }
            >
                Set Information
            </button>
            <br />
            <button 
                className="edit-person-btn edit-btn"
                onClick={() => {
                    editPerson(personArray)
                }}
            >
                Edit
            </button>
            <button 
                className="delete-btn"
                onClick={() => {
                    resetPerson();
                    clearInputs();
                }}
            >
                Reset
            </button>
        </>
    )
}

function editPerson(obj) {
    document.querySelectorAll('.edit-person-btn').forEach(btn => btn.disabled = true);
    document.getElementById('name-input').value = obj.name;
    document.getElementById('email-input').value = obj.email;
    document.getElementById('phone-input').value = obj.phone;
}

function clearInputs() {
    document.querySelectorAll('.person-input').forEach(input => input.value = '');
    document.querySelectorAll('.edit-person-btn').forEach(btn => btn.disabled = false);
}

export default Person