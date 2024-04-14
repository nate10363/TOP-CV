/* eslint-disable react/prop-types */
import '../styles/Document.css'
import '../App.css'

function Document({ 
 

    personArray,
    educationArray,
    experienceArray
}) {

    return(
        <>

            <div id='doc-personal'>
                <h1 id='user-name'>{personArray.name}</h1>
                <div id='email-phone-div'>
                    <p className='email-phone'>✉️ {personArray.email}</p>
                    <p className='email-phone'>📞 {personArray.phone}</p>
                </div>
            </div>

            <div id='doc-education'>
                <h3>Education</h3>
                <div>
                    {educationArray.map((obj) => {
                        return (
                            <>
                                <div className='inner-container'>
                                    <div className='date-container'>
                                        <p>{obj.gradDate}</p>
                                    </div>
                                    <div className='info-container'>
                                        <p id='school'>{obj.school}</p>
                                        <p id='major'>• {obj.major}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>



            <div id='doc-experience'>
                <h3>Experience</h3>
                <div>
                    {experienceArray.map((obj) => {
                        return (
                            <>
                                <div className='inner-container'>
                                    <div className='date-container'>
                                        <p>{obj.startDate}<br />
                                        to<br />
                                        {obj.endDate}</p>
                                    </div>
                                    <div className='info-container'>
                                        <p  id='school'>{obj.company}</p>
                                        <p className='supplement-info' id='major'>• {obj.position}</p>
                                        <p className='supplement-info'>• {obj.responsibilities}</p>

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Document