import { useEffect } from "react"
import LogRegUser from "./Views/LogRegUser"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import axios from "axios"
export default function App() {
    useEffect(() => {
        axios.get("http://localhost:5292/api/company/all").then(res => console.log(res.data))
    },[])
    return (
        <div>
            <NavBar/>
            <LogRegUser/>
        </div>
    )
}