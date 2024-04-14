/* eslint-disable react/prop-types */

// function Input({ change, title, type, phText, className, id }) {
function Input({ title, type, phText, className, id }) {
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
                <input
                    className={className}
                    id={id}
                    placeholder={phText}
                    // value = {value}
                    // onChange={handleChange}
                    type={type}
                    required
                />
            </label>
        </div>
    )
}

export default Input