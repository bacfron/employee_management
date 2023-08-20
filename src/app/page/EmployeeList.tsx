'use client'
import React, {useContext} from "react";
import "./EmployeeList.css";
import { FaWindowClose } from "react-icons/fa";

import { useEffect, useState } from "react";
import employeeContext from "@employee/app/context/EmployeeContext";
const api_base = "http://localhost:3002";

function EmployeeList() {
    // const [Employees, setEmployees] = useState([]);
let context = useContext(employeeContext);
    useEffect(() => {
      // setEmployees(context);
        console.log("emple",context);
    }, []);

    const GetEmployees = () => {
        fetch(api_base + "/employee")
            .then((res) => res.json())
            // .then((data) => setEmployees(data))
            .catch((err) => console.error("Error: ", err));
    };

    const deleteemployees = async (id:any) => {
        const data = await fetch(api_base + "/employee/delete/" + id, {
            method: "DELETE",
        }).then((res) => res.json());

        // setEmployees((Employees) =>
        //     Employees.filter((employees) => employees._id !== data.result._id)
        // );
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="employee-list-section">
            <div className="employee-list">
                <h2>Current Employees</h2>


                {

                        // eslint-disable-next-line no-use-before-define
                    //@ts-ignore
                    context.map((employees) => (

                        <div
                            className={
                                "employee" + (employees.complete ? " is-complete" : "")
                            }
                            key={employees._id}
                        >
                            <div className="employee-details">
                                <p className="name">
                                    {employees.FirstName} {employees.SecondName}
                                </p>
                                <p className="email">{employees.Email}</p>
                                <p className="phone">{employees.Phone}</p>
                            </div>

                            <div
                                className="delete-employee"
                                onClick={() => deleteemployees(employees._id)}
                            >
                                <FaWindowClose size={25} />
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
}

export default EmployeeList;