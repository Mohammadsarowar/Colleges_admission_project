import React, { useContext } from 'react';
import { addAdmission } from '../../../API/Auth';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CandidateForm = () => {
    const{
        user,
        updateUserProfile,
        signInWithGoogle,
        loading,
        setLoading,
      } = useContext(AuthContext);
    const oldUser = (user?.email);
    const handelCreateUser = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.candidateName.value;
        const subject = from.subject.value;
        const email = from.candidateEmail.value;
        const phone = from.candidatePhone.value;
        const address = from.address.value;
        const date = from.dob.value;
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
             Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
           
             console.log(imgUrl);
             const allData = {name,subject, email, phone, address, date ,imgUrl,oldUser}
             addAdmission(allData)
            
          })
          .catch((err) => {
            console.log(err.message);
            
            setLoading(false);
          });
    
        return;
    
        // console.log(email, password);
      };

  return (
    <div className='mt-20'>
    <h2 className='text-3xl text-center font-mono'>Admission From</h2>
      <form onSubmit={handelCreateUser} className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 my-10 font-sans">
      <div className="mb-4">
        <label htmlFor="candidateName" className="block mb-2 font-bold text-gray-700">
          Candidate Name
        </label>
        <input
          type="text"
          name="candidateName"
          id="candidateName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 font-bold text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="candidateEmail" className="block mb-2 font-bold text-gray-700">
          Candidate Email
        </label>
        <input
          type="email"
          name="candidateEmail"
          id="candidateEmail"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="candidatePhone" className="block mb-2 font-bold text-gray-700">
          Candidate Phone number
        </label>
        <input
          type="tel"
          name="candidatePhone"
          id="candidatePhone"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 font-bold text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dob" className="block mb-2 font-bold text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-2 font-bold text-gray-700">
          Image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          accept="image/*"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form></div>
  
  );
};

export default CandidateForm;
