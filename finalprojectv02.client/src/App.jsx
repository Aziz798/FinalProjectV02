import axios from "axios";
import { useState } from "react";

export default function App() {
    const [register, setRegister] = useState({
        CompanyName: "",
        CompanyEmail: "",
        CompanyType: "",
        CompanyPassword: "",
        CompanyConfirmPassword: "",
        LogoImg: null
    });
    console.log(register)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setRegister(prevState => ({
            ...prevState,
            LogoImg: file
        }));
    };

    const formHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('CompanyName', register.CompanyName);
            formData.append('CompanyEmail', register.CompanyEmail);
            formData.append('CompanyType', register.CompanyType);
            formData.append('CompanyPassword', register.CompanyPassword);
            formData.append('CompanyConfirmPassword', register.CompanyConfirmPassword);
            formData.append('LogoImg', register.LogoImg);

            const response = await axios.post("http://localhost:5292/api/company/register", formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={formHandler} className="max-w-md mx-auto mt-8 shadow-md p-8 bg-white" encType="multipart/form-data">
            <label htmlFor="CompanyName" className="block mb-2">Company Name:</label>
            <input type="text" id="CompanyName" name="CompanyName" value={register.CompanyName} onChange={handleChange} className="w-full border rounded-md py-2 px-3 mb-4" />
            <label htmlFor="CompanyEmail" className="block mb-2">Company Email:</label>
            <input type="text" id="CompanyEmail" name="CompanyEmail" value={register.CompanyEmail} onChange={handleChange} className="w-full border rounded-md py-2 px-3 mb-4" />
            <label htmlFor="CompanyType" className="block mb-2">Company Type:</label>
            <input type="text" id="CompanyType" name="CompanyType" value={register.CompanyType} onChange={handleChange} className="w-full border rounded-md py-2 px-3 mb-4" />
            <label htmlFor="CompanyPassword" className="block mb-2">Company Password:</label>
            <input type="text" id="CompanyPassword" name="CompanyPassword" value={register.CompanyPassword} onChange={handleChange} className="w-full border rounded-md py-2 px-3 mb-4" />
            <label htmlFor="CompanyConfirmPassword" className="block mb-2">Confirm Password:</label>
            <input type="text" id="CompanyConfirmPassword" name="CompanyConfirmPassword" value={register.CompanyConfirmPassword} onChange={handleChange} className="w-full border rounded-md py-2 px-3 mb-4" />
            <label htmlFor="LogoImg" className="block mb-2">Logo Image:</label>
            <input type="file" id="LogoImg" name="LogoImg" onChange={handleFileChange} className="mb-4" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
}
