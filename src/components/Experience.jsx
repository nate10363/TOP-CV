/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

let objectIndex;

function Experience({ 
    experienceArray,
    setExperienceArray,
}) {

    function handleExperienceArray() {
        setExperienceArray([...experienceArray, 
                            {'company': document.getElementById('company-input').value, 
                            'position': document.getElementById('position-input').value, 
                            'startDate': document.getElementById('startDate-input').value, 
                            'endDate': document.getElementById('endDate-input').value, 
                            'responsibilities': document.getElementById('textArea-input').value
                        }])
    }

    return (
        <>
            <Input className='exp-input' id='company-input' title='Company Name' phText='Company' type='text' />
            <Input className='exp-input' id='position-input' title='Employee Title' phText='Position' type='text' />
            <Input className='exp-input' id='startDate-input' title='Start Date' type='month' />
            <Input className='exp-input' id='endDate-input' title='End Date' type='month' />
            <Textarea className='exp-input' id='textArea-input' title='Main Responsibilities' phText='Enter in List Form' type='text' rows='7' cols='20' />

            <button
                className='add-btn'
                id='add-exp-btn'
                onClick={() => {
                    if (document.getElementById('add-exp-btn').textContent == 'Add Experience') {
                        handleExperienceArray();
                        document.querySelectorAll('.exp-input').forEach(input => input.value = "");
                    } else {
                        setExperienceArray(saveExp(experienceArray, experienceArray[objectIndex]));
                        document.getElementById('add-exp-btn').textContent = 'Add Experience'
                        return document.querySelectorAll('.exp-input').forEach(input => input.value = "");
                    }
                }}
            >
                Add Experience
            </button>

            <div className="add-section-title">Experience List</div>
            <div id='navbar-experience-container'>{experienceArray.map(obj => {
                return (
                    <div className="navbar-job" key={obj.company + obj.position + Date()}>
                        <div>{obj.company}</div>
                        <button
                            className="edit-exp-btn edit-btn "
                            id={obj.company.split(' ').join('') + '-' + obj.position + '-btn'}
                            key={obj.company.split(' ').join('') + '-' + obj.position + '-btn'}
                            onClick={() => {
                                    document.getElementById('add-exp-btn').textContent = 'Save';
                                    editExp(experienceArray, obj);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => setExperienceArray(deleteExp(experienceArray, obj.company))}
                        >Delete</button>
                    </div>
                )
            })}
            </div>
        </>
    )
}

function saveExp(arr, obj) {

    const index = arr.findIndex(item => item.company == obj.company);
    let newArray = arr.slice(0, index);

    newArray = [...newArray, ({'company': document.getElementById('company-input').value, 
        'position': document.getElementById('position-input').value, 
        'startDate': document.getElementById('startDate-input').value, 
        'endDate': document.getElementById('endDate-input').value, 
        'responsibilities': document.getElementById('textArea-input').value})];
    
    if (arr.length >= index) {
        newArray = [...newArray, ...arr.slice(index + 1)];
    }

    console.log(newArray)

    return newArray
}

function editExp(arr, obj) {
    document.querySelectorAll('.edit-exp-btn').forEach(btn => btn.disabled = true);

    document.getElementById('company-input').value = obj.company;
    document.getElementById('position-input').value = obj.position;
    document.getElementById('startDate-input').value = obj.startDate;
    document.getElementById('endDate-input').value = obj.endDate;
    document.getElementById('textArea-input').value = obj.responsibilities;

    objectIndex = arr.findIndex(item => item.company == obj.company);
    console.log(objectIndex)
}

function deleteExp(arr, companyVal) {
    return arr.filter((obj) => obj.company != companyVal);
}

export default Experience