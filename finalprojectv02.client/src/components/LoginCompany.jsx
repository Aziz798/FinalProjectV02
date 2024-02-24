import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginCompany = ({ setToken }) => {
    const [loginCompany, setLoginCompany] = useState({
        LoginEmail:"",
        LoginPassword:"",
    });
    const [validationErrors, setValidationErrors] = useState({
        LoginEmail:null,
        LoginPassword:null,
    });
    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginCompany((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const formHandler = async e => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5292/api/company/login", loginCompany);
            localStorage.setItem("companyId", response.data.Company.CompanyId);
            localStorage.setItem("token", response.data.Token);
            setLoginCompany({
                LoginEmail:"",
                LoginPassword:"",
            });
            setValidationErrors({
                LoginEmail:null,
                LoginPassword:null,
            });
            setToken("company");
            nav("/homepage")
        } catch (error) {
            setValidationErrors(error.response.data.Errors);
        }
    }
    return (
        <div className="space-y-4">
            <form onSubmit={formHandler} className="flex flex-col space-y-4 items-center">
                <h1 className="text-3xl">Login as Company</h1>
                {validationErrors.LoginEmail && (
                    validationErrors.LoginEmail.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="LoginEmail"
                        value={loginCompany.LoginEmail}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </label>

                {validationErrors.LoginPassword && (
                    validationErrors.LoginPassword.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="LoginPassword"
                        value={loginCompany.LoginPassword}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </label>
                <button type="submit" className="btn btn-info">
                    Register
                </button>
            </form>
        </div>
    )
}

export default LoginCompany