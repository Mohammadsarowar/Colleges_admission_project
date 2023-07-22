import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar z-10 top-0 fixed bg-slate-100 py-2 font-mono">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-blue-500 text-white" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-blue-500 text-white" : ""
              }
            >
             Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admission"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active bg-slate-500" : ""
              }
            >
               Admission
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/mycollege"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active bg-slate-500" : ""
              }
            >
            My College
            </NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto text-center ">
        <ul className="menu menu-horizontal gap-5 font-bold font-serif">
        <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-blue-500 text-white" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              className={({ isActive, isPending }) =>
                isPending ? "pending 0" : isActive ? " active text-white" : " bg-blue-70"
              }
            >
             Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admission"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active bg-slate-500" : ""
              }
            >
               Admission
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/mycollege"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active bg-slate-500" : ""
              }
            >
            My College
            </NavLink>
          </li>
         
        </ul>
      </div>
      <div className="flex-none navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
       { user ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="Profile"/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a className="justify-between">
                {user?.displayName}
                
              </a>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>:<button className="btn btn-primary m-2"><Link to="/login">Login</Link></button>}
      </div>
    </div>
  );
};

export default Navbar;
