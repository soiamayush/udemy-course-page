import React from "react";
import { TbWorld } from 'react-icons/tb';
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="footer w-full h-72 bg-black flex gap-x-44 ">
      <div className="first flex">
        <div className="text-neutral-50 flex gap-x-40 p-8">
          <div className=" flex flex-col gap-y-2 text-sm">
            <Link to="/" className="hover:underline">Udemy Business</Link>
            <Link to="/"  className="hover:underline">Teach on Udemy</Link>
            <Link to="/"  className="hover:underline">Get the App</Link>
            <Link to="/"  className="hover:underline">About Us</Link>
            <Link to="/"  className="hover:underline">Contact Us</Link>
          </div>

          <div className="flex flex-col gap-y-2 text-sm">
            <Link to="/" className="hover:underline">Careers</Link>
            <Link to="/" className="hover:underline">Blogs</Link>
            <Link to="/" className="hover:underline">Help and Support</Link>
            <Link to="/" className="hover:underline">Affiliate</Link>
            <Link to="/" className="hover:underline">Investors</Link>
          </div>

          <div className="flex flex-col gap-y-2 text-sm">
            <Link to="/" className="hover:underline">Terms</Link>
            <Link to="/" className="hover:underline">Privacy Policy</Link>
            <Link to="/" className="hover:underline">Cookie Settings</Link>
            <Link to="/" className="hover:underline">SiteMaps</Link>
            <Link to="/" className="hover:underline">Accesibility Statement</Link>
          </div>
        </div>
      </div>

      <div className="second py-8">
      <Link
              to="/"
              className="ml-2 inline-flex items-center justify-center whitespace-nowrap  border border-stone-50 bg-neutral-900 px-6 py-1  text-sm   text-white shadow-sm hover:bg-neutral-800"
            >
              <TbWorld size={"20px"}/><span className="px-2 text-lg ">English</span>
            </Link>
      </div>
    </div>
  );
};

export default Footer;
