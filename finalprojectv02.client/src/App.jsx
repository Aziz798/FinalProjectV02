import PreLogRegNav from "./components/PreLogRegNav";
import { Route, Routes } from "react-router-dom";
import LogRegCompany from "./views/LogRegCompany";
import { useState } from "react";
import LogRegUser from "./views/LogRegUser";
import UserNavbar from "./components/UserNavbar";
import Tache from "./views/Tache";

export default function App() {
    const [color, setColor] = useState("dark")
    const [token,setToken] =useState(false)
    return (

        <div data-theme={color}>
            {token===false ?<PreLogRegNav setColor={setColor}/> :(token==="user"?<UserNavbar setToken={setToken} setColor={setColor}/>:<div></div>)}
            <Routes data-theme="dark">
                <Route path="/register/login/company" element={<LogRegCompany setToken={setToken}/>} />
                <Route path="/register/login/user" element={<LogRegUser setToken={setToken}/>}/>
                <Route path="/tasks/project/{projectId}" element={<Tache/>}/>
            </Routes>
        </div>
    )
}
