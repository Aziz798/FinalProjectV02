import axios from "axios";
import { useEffect, useState } from "react"

const ProjectscCompany = () => {
    const [company,setCompany]=useState(null);
    const [employees,setEmployess]=useState(null);
    StaticRange
    useEffect(()=>{
        async function getCompany(){
            try {
                const res = await axios.get("http://localhost:5292/api/project/company/"+localStorage.getItem("companyId"));
                const res2 = await axios.get("http://localhost:5292/api/company/employees/"+localStorage.getItem("companyId"))
                setCompany(res.data.$values)
                setEmployess(res2.data.$values);
            } catch (error) {
                console.log(error);
            }
        }
        getCompany()
    },[])
    return (
        <div className="stats shadow">

            <div className="stat place-items-center">
                <div className="stat-title">Projects</div>
                <div className="stat-value">{company && company.length}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Employees</div>
                <div className="stat-value text-secondary">{employees && employees.length}</div>
                <div className="stat-desc text-secondary">Employees working on the company</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    )
}

export default ProjectscCompany