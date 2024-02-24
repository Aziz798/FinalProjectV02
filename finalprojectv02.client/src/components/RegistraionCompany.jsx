import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistraionCompany = ({ setToken }) => {
    const [registerCompany, setRegisterCompany] = useState({
        CompanyName: "",
        CompanyEmail: "",
        CompanyType: "",
        LogoImg: null,
        CompanyPassword: "",
        CompanyConfirmPassword: "",
    });
    const [validationErrors, setValidationErrors] = useState({
        CompanyName: null,
        CompanyEmail: null,
        CompanyType: null,
        LogoImg: null,
        CompanyPassword: null,
        CompanyConfirmPassword: null,
    });
    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterCompany((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setRegisterCompany((prevState) => ({
            ...prevState,
            LogoImg: file
        }));
    };
    const formHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('CompanyName', registerCompany.CompanyName);
            formData.append('CompanyEmail', registerCompany.CompanyEmail);
            formData.append('CompanyType', registerCompany.CompanyType);
            formData.append('CompanyPassword', registerCompany.CompanyPassword);
            formData.append('CompanyConfirmPassword', registerCompany.CompanyConfirmPassword);
            formData.append('LogoImg', registerCompany.LogoImg);

            const response = await axios.post("http://localhost:5292/api/company/register", formData);
            localStorage.setItem("companyId", response.data.Company.CompanyId);
            localStorage.setItem("token", response.data.Token);
            setRegisterCompany({
                CompanyName: "",
                CompanyEmail: "",
                CompanyType: "",
                LogoImg: null,
                CompanyPassword: "",
                CompanyConfirmPassword: "",
            });
            setValidationErrors({
                CompanyName: null,
                CompanyEmail: null,
                CompanyType: null,
                LogoImg: null,
                CompanyPassword: null,
                CompanyConfirmPassword: null,
            });
            setToken("company");
            nav("/homepage")
        } catch (error) {
            setValidationErrors(error.response.data.Errors);
        }
    };

    return (

        <div className="space-y-4">
            <form onSubmit={formHandler} className="flex flex-col space-y-4 items-center">
                <h1 className="text-3xl">Regiter as Company</h1>
                {validationErrors.CompanyName && (
                    validationErrors.CompanyName.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="CompanyName"
                        value={registerCompany.CompanyName}
                        onChange={handleChange}
                        placeholder="Company name"
                    />
                </label>
                {validationErrors.CompanyEmail && (
                    validationErrors.CompanyEmail.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="CompanyEmail"
                        value={registerCompany.CompanyEmail}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </label>
                {validationErrors.CompanyType && (
                    validationErrors.CompanyType.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="CompanyType"
                        value={registerCompany.CompanyType}
                        onChange={handleChange}
                        placeholder="Company type"
                    />
                </label>
                {validationErrors.CompanyPassword && (
                    validationErrors.CompanyPassword.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="CompanyPassword"
                        value={registerCompany.CompanyPassword}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </label>
                {validationErrors.CompanyConfirmPassword && (
                    validationErrors.CompanyConfirmPassword.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="CompanyConfirmPassword"
                        value={registerCompany.CompanyConfirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                </label>
                {validationErrors.LogoImg && (
                    validationErrors.LogoImg.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick a file</span>
                    </div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full max-w-xs"
                    />
                </label>

                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistraionCompany;
