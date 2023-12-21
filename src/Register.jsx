import React, { useContext } from 'react';
import GoogleLogin from './GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {createUser,handleUpdateProfile} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;

      //  console.log(name,email,img,password);

        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
          //  console.log("Password must be at least 6 characters")
            return;
        }

        if(/[A-Z]/.test(password)===false){
            toast.error('Password must have 1 capital letter');
            return;
        }

        if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)===false){
            toast.error('Password must have 1 special character');
            return;
        }


        // creating a new user
        createUser(email, password)
        .then(res => {
            handleUpdateProfile(name, img)
                .then(() => {
                    toast.success('User created successfully');
                    navigate(location?.state ? location.state : '/');
                })
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className='py-10'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Create an Account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                <input type="text" name="img" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz.com/1.jpg" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                            </div>
                            
                            <div className="form-control mt-6 p-0">
                                            <button type='submit' className="btn bg-blue-500">Register</button>
                            </div>
                            <p className="text-sm font-light text-blue-500 dark:text-blue-400">
                                Have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;