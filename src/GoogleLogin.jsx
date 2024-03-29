import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const GoogleLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = (media) => {
        
        media()
            .then(res => {
              //  console.log(res);
                swal("Done!", "Logged in Successfully!", "success");
                navigate(location?.state ? location.state : '/');

                const email = res.user?.email;
                const name = res.user?.displayName;
                const img = res.user?.photoURL;
                const createdAt = res.user?.metadata?.creationTime;
                const user = {email,name,img,createdAt};
                // send data to the server
                fetch('https://troubled-sweatsuit-hare.cyclic.app/users', {
                    method: 'POST',
                    //mode: 'no-cors',
                    headers: {
                        'content-type': 'application/json'
                        //'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    if(data.insertedId){
                        toast.success('User added successfully');
                    }
                })
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