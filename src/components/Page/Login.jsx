import React, { useContext,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/Fc";
import { BsGithub, BsFacebook } from "react-icons/Bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { saveUser } from "../../API/Auth";
import Swal from "sweetalert2";
import useTitle from "../Home/Shared/useTitle";
const Login = () => {
  useTitle('login')
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
  useContext(AuthContext)
  const [email, setEmail] = useState("") 
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'

// Handle submit
const handleSubmit = event => {
  event.preventDefault()
  const email = event.target.email.value
  const password = event.target.password.value
  setEmail(email)
  signIn(email, password)
    .then(result => {
      console.log(result.user)
      Swal.fire({
        icon: 'success',
        title: 'Login in successfully',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true })
    })
    .catch(err => {
      setLoading(false)
      console.log(err.message)
      toast.error(err.message)
    })
}

// Handle google signin
const handleGoogleSignIn = () => {
  signInWithGoogle()
    .then(result => {
      console.log(result.user)
      Swal.fire({
        icon: 'success',
        title: 'Login in successfully',
        showConfirmButton: false,
        timer: 1500
      })
      // save user to db
      saveUser(result.user)
      navigate(from, { replace: true })
    })
    .catch(err => {
      setLoading(false)
      console.log(err.message)
      toast.error(err.message)
    })
}

//   handle password reset
const handleReset = () => {
  // const email = emailRef.current.value

  resetPassword(email)
    .then(() => {
      Swal.fire('Please check your email for reset link')
      setLoading(false)
      navigate(from, { replace: true })
    })
    .catch(err => {
      setLoading(false)
      console.log(err.message)
      toast.error(err.message)
    })
}
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="label">
              <button onClick={handleReset} className="label-text-alt link link-hover hover:link-primary">
                Forgot password?
              </button>
            </label>
            <label className="label">
              <Link to='/signup' className="label-text-alt link link-hover hover:link-primary">
              Don't Have Account
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          
          className="flex justify-center items-center space-x-2 gap-5 my-2"
        >
          <FcGoogle onClick={handleGoogleSignIn} size={32} />
           <BsGithub size={30} />
           <BsFacebook size={32} />
        </div>
      </div>
    
    </div>
  );
};

export default Login;
