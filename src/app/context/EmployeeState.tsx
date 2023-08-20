'use client'
import EmployeeContext from "@employee/app/context/EmployeeContext";
import {useState} from "react";


const EmployeeState=(props:any)=>{
    const [Employees, setEmployees]:any[] = useState([{FirstName:"prateek",
        SecondName:"pal",
        Email:"pal@gmail.com",
        Phone:"98745663210",
        id:1

    }]);
    const performOperation=(type:string,data:any)=>{
        if(type==="add") {
            console.log("data is",data)
            setEmployees(data,...data);
            console.log(Employees)
        }
    }
    // @ts-ignore
    return (
      <EmployeeContext.Provider value={Employees}>
          {props.children}
      </EmployeeContext.Provider>
    )

}
export default EmployeeState;