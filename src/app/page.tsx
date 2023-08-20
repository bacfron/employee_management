'use client'
import AddEmployee from "@employee/app/page/AddEmployee";
import {createContext, useState} from "react";
import EmployeeList from "@employee/app/page/EmployeeList";
import EmployeeState from "@employee/app/context/EmployeeState";



export default function Home() {

    const [Employees, setEmployees] = useState([]);
  return (
    <EmployeeState>
    <main >
        <AddEmployee/>
        <EmployeeList/>
    </main>
    </EmployeeState>
  )
}
