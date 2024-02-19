import axios from "axios";
import { useState } from "react"

const RegistrationUser = () => {
    const [registerUser, setRegisterUser] = useState({
        FirstName: "",
        LastName: "",
        UserRole: "",
        UserEmail: "",
        UserPassword: "",
        ConfirmPassword: "",
        CompanyId: "",
    })
    const [errors, setErrors] = useState(null)
    const formHandler = async e => {
        e.preventDefault();
        try {
            const newUser = await axios.post("", registerUser);
            console.log(newUser)
        } catch (error) {
            setErrors(error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    console.log(registerUser)

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register as an employer
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formHandler}>
                            <div>
                                <label htmlFor="FirstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" name="FirstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert First Name here" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" name="LastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert Last Name here" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="UserRole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Role</label>
                                <input type="text" name="UserRole" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert User Role here" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="UserEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                                <input type="email" name="UserEmail" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert User Email here" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="UserPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Password</label>
                                <input type="password" name="UserPassword" id="UserPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="ConfirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="CompanyId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company ID</label>
                                <input type="text" name="CompanyId" id="CompanyId" placeholder="Insert Company ID here" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChange} />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-primary-600 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-6 py-3 text-center shadow-md transition duration-300 ease-in-out transform hover:scale-105">Create an account</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegistrationUser;
