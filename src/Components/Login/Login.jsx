import React from 'react';
import './Login.css';
import front from '../../images/front.jpg';
import logo from '../../images/newslogo.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase/setup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 rounded-md h-screen bg-black">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <img src={logo} alt="Logo" className="h-14 mb-4" />
        <h1 className="text-white text-3xl font-semibold">Sign In</h1>
        <button onClick={googleSignin} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button>
        {/* <h2 className="text-blue-500 underline mt-4">Sign in Now</h2> */}
      </div>
      <div className="flex items-center justify-center">
        <img src={front} alt="Front" className="h-screen" />
      </div>
    </div>
  );
};

export default Login;
