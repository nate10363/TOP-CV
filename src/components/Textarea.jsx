/* eslint-disable react/prop-types */
import { useState } from "react";

function Textarea({ change, title, type, initVal, phText, rows, cols }) {
    const [value, setNewValue] = useState(initVal);

    function handleChange(event) {
        let value = event.target.value;
        setNewValue(value);
        change(value);
    }

    return (
        <div>
            <label className="input-label">
                {title}
                <br />
                <textarea
                    className="input"
                    placeholder={phText}
                    value = {value}
                    onChange={handleChange}
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