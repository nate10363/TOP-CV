/* eslint-disable react/prop-types */
// import { useState } from "react";

// function Textarea({ change, title, type, phText, rows, cols, className, id }) {

function Textarea({ title, type, phText, rows, cols, className, id }) {
    // const [value, setNewValue] = useState(initVal);

    // function handleChange(event) {
    //     let value = event.target.value;
    //     // setNewValue(value);
    //     change(value);
    // }

    return (
        <div>
            <label className="input-label">
                {title}
                <br />
                <textarea
                    className={className}
                    id={id}
                    placeholder={phText}
                    // value = {value}
                    // onChange={handleChange}
                    type={type}
                    rows={rows}
                    cols={cols}
                    required
                />
            </label>
        </div>
    )
}

export default Textarea