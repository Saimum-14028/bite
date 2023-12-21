import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import swal from 'sweetalert';

const GoogleLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = (media) => {
        
        media()
            .then(res => {
             //   console.log(res);
                swal("Done!", "Logged in Successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
            //    console.log(error);
                swal("Error!", error.message, "error");
               // toast.error(error.message)
            })
    }

    return (
        <div>
            <div className="divider text-white">or continue with</div>
            <div className="form-control mt-6 p-0">
                <button
                    onClick={() => handleGoogleLogin(googleLogin)}
                    className="btn bg-red-500">Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;