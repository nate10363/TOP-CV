/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "./Input";

function Person({ setName, setEmail, setPhone }) {

    return (
        <>
            <Input change={setName} title='Full Name' phText='name' type='text'/>
            <Input change={setEmail} title='Email' phText='bobloblaw@loblaw.net' type='email' />
            <Input change={setPhone} title='Phone' phText='555-555-5555' type='tel' />
        </>
    )
}

export default Person