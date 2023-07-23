import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import './editProfile'
import InputForm from './editProfile';
const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md ">
          <img src={user?.photoURL} className="max-w-sm lg:w-full rounded-full shadow-2xl mx-auto" />
            <h1 className="text-3xl font-mono font-bold mt-5">Name: {user?.displayName}</h1>
          <p className='text-xl font-mono font-bold mt-5'>Email : {user?.email}</p>
 {/* You can open the modal using ID.showModal() method */}
{/* Open the modal using ID.showModal() method */}
<button className="btn btn-secondary btn-outline mt-10" onClick={()=>window.my_modal_5.showModal()}>Edit</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Edit Profile</h3>
   <InputForm/>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-secondary">Done</button>
    </div>
  </form>
</dialog>
          </div>
        </div>
      </div>
    );
};

export default Profile;