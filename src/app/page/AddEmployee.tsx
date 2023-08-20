'use client';
import React, {useContext} from "react";
import "./addEmployee.css";
// @ts-ignore


import { useState } from "react";
import EmployeeContext from "@employee/app/context/EmployeeContext";
import {date} from "zod";


const AddEmployee = () => {
let useContext1 = useContext(EmployeeContext);

    const [Employees, setEmployees] = useState([]);
    const [newEmployeeFirstName, setnewEmployeeFirstName] = useState("");
    const [newEmployeeSecondName, setnewEmployeeSecondName] = useState("");
    const [newEmployeeEmail, setnewEmployeeEmail] = useState("");
    const [newEmployeePhone, setnewEmployeePhone] = useState("");

   const addEmployee=()=>{
const data={
    "FirstName":newEmployeeFirstName,
    "SecondName":newEmployeeSecondName,
    "email":newEmployeeEmail,
    "phone":newEmployeePhone
}


    }

    return (
        <div className="add-employee-section">
            <div className="add-employee-header">
                <p>New Employee</p>
            </div>
            <form className="form">
                <div className="single-form-entry">
                    <label className="required">First Name: </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setnewEmployeeFirstName(e.target.value)}
                        value={newEmployeeFirstName}
                    />
                </div>
                <div className="single-form-entry">
                    <label className="required">Last Name: </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setnewEmployeeSecondName(e.target.value)}
                        value={newEmployeeSecondName}
                    />
                </div>
                <div className="single-form-entry">
                    <label className="required">Email: </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setnewEmployeeEmail(e.target.value)}
                        value={newEmployeeEmail}
                    />
                </div>
                <div className="single-form-entry">
                    <label className="required">Phone: </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setnewEmployeePhone(e.target.value)}
                        value={newEmployeePhone}
                    />
                </div>
                <div className="form-buttons">
                    <button className="clear-all-btn">Clear All</button>
                    <button className="add-btn" onClick={addEmployee}>
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;