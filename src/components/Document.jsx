/* eslint-disable react/prop-types */
import '../styles/Document.css'
import '../App.css'

function Document({ name, email, phone, school, major, graduationDate, company, position, startDate, endDate, responsibilities }) {
    return(
        <>
            <div id='doc-personal'>
                <h1 id='user-name'>{name}</h1>
                <div id='email-phone-div'>
                    <p className='email-phone'>✉️ {email}</p>
                    <p className='email-phone'>📞 {phone}</p>
                </div>
            </div>

            <div id='doc-education'>
                <h3>Education</h3>
                <div className='inner-container'>
                    <div className='date-container'>
                        <p>{graduationDate.slice(0,7)}</p>
                    </div>
                    <div className='info-container'>
                        <p id='school'>{school}</p>
                        <p id='major'>• {major}</p>
                    </div>
                </div>
            </div>

            <div id='doc-experience'>
                <h3>Experience</h3>
                <div className='inner-container'>
                    <div className='date-container'>
                        <p>{startDate.slice(0,7)}<br />
                        to<br />
                        {endDate.slice(0,7)}</p>
                    </div>
                    <div className='info-container'>
                        <p  id='school'>{company}</p>
                        <p className='supplement-info' id='major'>• {position}</p>
                        <p className='supplement-info'>• {responsibilities}</p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Document