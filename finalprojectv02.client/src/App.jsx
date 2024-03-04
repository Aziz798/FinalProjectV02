import PreLogRegNav from "./components/preLogRegDashboard/PreLogRegNav";
import { Route, Routes, Navigate } from "react-router-dom";
import LogRegCompany from "./views/LogRegCompany";
import { useState } from "react";
import LogRegUser from "./views/LogRegUser";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import Tache from "./views/Tache";
import PreLogRegDashboard from "./views/PreLogRegDashboard";
import NotFoundPage from "./views/NotFoundPage";
import ShowAllProjects from "./components/Projects/ShowAllProjects";
import ComapnyDahsboard from "./components/CompanyDahsboard/ComapnyDahsboard";

export default function App() {
    const [color, setColor] = useState("dark");
    const [token, setToken] = useState(false);
    const tokens = localStorage.getItem("token")
    
    return (
        <div data-theme={color}>
            {!tokens && <PreLogRegNav setColor={setColor} />}
            <Routes>
                
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<PreLogRegDashboard />} />
                <Route path="/register/login/company" element={<LogRegCompany setToken={setToken} />} />
                <Route path="/register/login/user" element={<LogRegUser setToken={setToken} />} />
                <Route path="/tasks/project/:projectId" element={<Tache />} />
                <Route path="/user/dashboard" element={<UserDashboard setColor={setColor} />} />
                <Route path="/projects/user/:id" element={<ShowAllProjects setColor={setColor}/>}/>
                <Route path="/company/dashboard" element={<ComapnyDahsboard setColor={setColor}/>}/>
            </Routes>
        </div>
    );
}
