import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/Fc";
import { BsGithub, BsFacebook } from "react-icons/Bs";
import { toast } from 'react-toastify';
import { useContext, useRef } from "react";



import { AuthContext } from "../../Providers/AuthProvider";
import { saveUser } from "../../API/Auth";
import Swal from "sweetalert2";
import useTitle from "../Home/Shared/useTitle";


const SignUp = () => {
  useTitle('sign up')
  const{
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathName || "/";

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Login in successfully',
          showConfirmButton: false,
          timer: 1500
        })
        saveUser(result.user)
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };
  const handelCreateUser = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    //img upload
    const imagePhoto = from.image.files[0];
    const fromData = new FormData();
    fromData.append("image", imagePhoto);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGDB_API
    }`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((img) => {
        const imgUrl = img.data.display_url;
        createUser(email, password)
          .then((result) => {
          
            updateUserProfile(name, imgUrl)
              .then(() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Sign up in successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                saveUser(result?.user)
                navigate(fromLocation, { replace: true });
              })
              .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
                setLoading(false);
              });

            navigate(fromLocation, { replace: true });
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });

    return;

    // console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center min-h-screen mt-10">
      <div className="flex flex-col max-w-md p-8 rounded-md  bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handelCreateUser}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"

        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
               {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          
          className="flex justify-center items-center space-x-2 gap-5 my-10"
        >
          <FcGoogle onClick={handleSignInWithGoogle} size={32} />
           <BsGithub size={30} />
           <BsFacebook size={32} />
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;