/* eslint-disable react/prop-types */
import { useState } from "react";

function Input({ change, title, type, initVal, phText }) {
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
                <input
                    className="input"
                    placeholder={phText}
                    value = {value}
                    onChange={handleChange}
                    type={type}
                    required
                />
            </label>
        </div>
    )
}

export default Input