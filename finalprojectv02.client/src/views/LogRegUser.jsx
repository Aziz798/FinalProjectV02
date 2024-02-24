import LoginUser from "../components/LoginUser"
import RegisterUser from "../components/RegisterUser"


const LogRegUser = ({setToken}) => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex rounded-lg p-6 shadow-md'>
            <RegisterUser setToken={setToken} />
            <div className="mx-28"></div>
            <LoginUser setToken={setToken}/>
            </div>
        </div>
    )
}

export default LogRegUser