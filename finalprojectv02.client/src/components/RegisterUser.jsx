import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const RegisterUser = ({ setToken }) => {
    const [registerUser, setRegisterUser] = useState({
        FirstName: "",
        LastName: "",
        UserEmail: "",
        UserPassword: "",
        UserPhoto: null,
        ConfirmPassword: "",
        CompanyId: null,
        RoleId: null,
    });
    const [validationErrors, setValidationErrors] = useState({
        FirstName: null,
        LastName: null,
        UserEmail: "",
        UserPassword: "",
        UserPhoto: null,
        ConfirmPassword: null,
        CompanyId: null,
        RoleId: null,
    });

    const [roles, setRoles] = useState(null);
    const [companies, setCompanies] = useState(null);
    const nav = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setRegisterUser((prevState) => ({
            ...prevState,
            UserPhoto: file
        }));
    };
    useEffect(() => {
        async function getRolesAndCompanies() {
            try {
                const rolesFromDb = await axios.get("http://localhost:5292/api/user/roles");
                const companiesFromDb = await axios.get("http://localhost:5292/api/company/all");
                setRoles(rolesFromDb.data);
                setCompanies(companiesFromDb.data);
            } catch (error) {
                console.log(error);
            }
        }
        getRolesAndCompanies();
    }, [])
    const formHandler = async e => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('FirstName', registerUser.FirstName);
            formData.append('LastName', registerUser.LastName);
            formData.append('UserEmail', registerUser.UserEmail);
            formData.append('UserPassword', registerUser.UserPassword);
            formData.append('UserPhoto', registerUser.UserPhoto);
            formData.append('CompanyId', registerUser.CompanyId);
            formData.append('ConfirmPassword', registerUser.ConfirmPassword);
            formData.append('RoleId', registerUser.RoleId);
            formData.append('UserRole', registerUser.UserRole);

            const response = await axios.post("http://localhost:5292/api/user/register", formData);
            localStorage.setItem("userId", response.data.User.UserId);
            localStorage.setItem("Token", response.data.Token);
            setToken("user");
            setRegisterUser({
                FirstName: "",
                LastName: "",
                UserRole: "",
                UserEmail: "",
                UserPassword: "",
                UserPhoto: null,
                ConfirmPassword: "",
                CompanyId: null,
                RoleId: null,
            });
            setValidationErrors({
                FirstName: null,
                LastName: null,
                UserRole: null,
                UserEmail: "",
                UserPassword: "",
                UserPhoto: null,
                ConfirmPassword: null,
                CompanyId: null,
                RoleId: null,
            });
            nav("/homepage/user");
        } catch (error) {
            setValidationErrors(error.response.data.Errors);
        }
    }
    return (
        <div className="space-y-4">
            <form onSubmit={formHandler} className="flex flex-col space-y-4 items-center">
                <h1 className="text-3xl">Regiter as Employee</h1>
                {validationErrors.FirstName && (
                    validationErrors.FirstName.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="FirstName"
                        value={registerUser.FirstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </label>
                {validationErrors.LastName && (
                    validationErrors.LastName.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="LastName"
                        value={registerUser.LastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </label>
                {validationErrors.UserEmail && (
                    validationErrors.UserEmail.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="UserEmail"
                        value={registerUser.UserEmail}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </label>
                {validationErrors.CompanyId && (
                    validationErrors.CompanyId.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <select name="CompanyId" value={registerUser.CompanyId} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Company that you work for</option>
                        {companies && companies.map(com => {
                            return <option key={com.CompanyId} value={com.CompanyId}>{com.CompanyName}</option>
                        })}
                    </select>
                </label>
                {validationErrors.RoleId && (
                    validationErrors.RoleId.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <select name="RoleId" value={registerUser.RoleId} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Your role in the company</option>
                        {roles && roles.map(role => {
                            return <option key={role.RoleId} value={role.RoleId}>{role.RoleName}</option>
                        })}
                    </select>
                </label>
                {validationErrors.UserPhoto && (
                    validationErrors.UserPhoto.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick a photo</span>
                    </div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full max-w-xs"
                    />
                </label>
                {validationErrors.UserPassword && (
                    validationErrors.UserPassword.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="UserPassword"
                        value={registerUser.UserPassword}
                        onChange={handleChange}
                        placeholder="Enter password here"
                    />
                </label>
                {validationErrors.ConfirmPassword && (
                    validationErrors.ConfirmPassword.map((err, key) => <li key={key} className="text-red-800">{err}</li>)
                )}
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="ConfirmPassword"
                        value={registerUser.ConfirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    />
                </label>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterUser