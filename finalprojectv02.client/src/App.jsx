import PreLogRegNav from "./components/PreLogRegNav";
import { Route, Routes } from "react-router-dom";
import LogRegCompany from "./views/LogRegCompany";
import { useState } from "react";

export default function App() {
    const [color, setColor] = useState("dark")

    return (

        <div data-theme={color}>
            <PreLogRegNav setColor={setColor} />
            <Routes data-theme="dark">
                <Route path="/register/login/company" element={<LogRegCompany/>} />
            </Routes>
        </div>
    )
}
