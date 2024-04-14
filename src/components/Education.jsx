/* eslint-disable react/prop-types */
import Input from "./Input"

let objectIndex;

function Education({ educationArray, setEducationArray }) {
    function handleEducationArray() {
        setEducationArray([...educationArray, 
            {'school': document.getElementById('school-input').value, 
            'major': document.getElementById('major-input').value, 
            'gradDate': document.getElementById('gradDate-input').value, 
        }])
    }
    
    return (
        <>
            <Input className='edu-input' id='school-input' title='University' phText='School Name' type='text' />
            <Input className='edu-input' id='major-input' title='Major / Field of Study' phText='Major' type='text' />
            <Input className='edu-input' id='gradDate-input' title='Graduation Date' type='month' />

            <button
                className='add-btn'
                id='add-edu-btn'
                onClick={() => {
                    if (document.getElementById('add-edu-btn').textContent == 'Add Education') {
                        handleEducationArray();
                        clearInputs();
                    } else {
                        setEducationArray(saveEdu(educationArray, educationArray[objectIndex]));
                        document.getElementById('add-edu-btn').textContent = 'Add Education';
                        clearInputs();
                    }
                }}
            >
                Add Education
            </button>

            <div className="add-section-title">Education List</div>
            <div>{educationArray.map(obj => {
                return (
                    <div className="navbar-job" key={obj.school + obj.major + Date()}>
                        <div>{obj.school}</div>
                        <button
                            className="edit-edu-btn edit-btn "
                            id={obj.school.split(' ').join('') + '-' + obj.major + '-btn'}
                            key={obj.school.split(' ').join('') + '-' + obj.major + '-btn'}
                            onClick={() => {
                                    if (document.getElementById('add-edu-btn').textContent == 'Add Education') {
                                        document.getElementById('add-edu-btn').textContent = 'Save';
                                        editEdu(educationArray, obj);
                                    } else {
                                        document.getElementById('add-edu-btn').textContent = 'Add Education';
                                    }
                            }}
                        >
                            Edit
                        </button>
                        <button 
                            className="delete-btn"
                            onClick={() => {
                                setEducationArray(deleteEdu(educationArray, obj.school));
                            }}
                        >Delete</button>
                    </div>
                )
            })}
            </div>
        </>
    )
}

function saveEdu(arr, obj) {

    const index = arr.findIndex(item => item.school == obj.school);
    let newArray = arr.slice(0, index);

    newArray = [...newArray, ({
        'school': document.getElementById('school-input').value, 
        'major': document.getElementById('major-input').value, 
        'gradDate': document.getElementById('gradDate-input').value })];
    
    if (arr.length >= index) {
        newArray = [...newArray, ...arr.slice(index + 1)];
    }

    return newArray
}

function editEdu(arr, obj) {
    document.querySelectorAll('.edit-edu-btn').forEach(btn => btn.disabled = true);

    document.getElementById('school-input').value = obj.school;
    document.getElementById('major-input').value = obj.major;
    document.getElementById('gradDate-input').value = obj.gradDate;

    objectIndex = arr.findIndex(item => item.school == obj.school);
}

function deleteEdu(arr, school) {
    return arr.filter((obj) => obj.school != school);
}

function clearInputs() {
    document.querySelectorAll('.edu-input').forEach(btn => btn.value = '');
}

export default Education