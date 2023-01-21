import React from "react";
import "./courseintro.css"
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { TbWorld, TbKeyboard } from "react-icons/tb";
import { GoWatch } from "react-icons/go"
import { MdOndemandVideo } from "react-icons/md"
import { TfiInfinite } from "react-icons/tfi"
import { CiMobile3 } from "react-icons/ci"
import { GiTrophy } from "react-icons/gi"
import { BsFillPlayCircleFill } from "react-icons/bs"

const Courseintro = () => {
  return (
    <div className="flex flex-row bg-zinc-900">
      <div className="my-8 mx-16 w-1/2">
        <div className=" flex flex-row gap-x-2 ">
          <div className="font-bold text-sm text-purple-400">
            IT & Software{" "}
          </div>{" "}
          <div className="text-white font-bold">&#62;</div>
          <div className="font-bold text-sm text-purple-400">
            Network & Security{" "}
          </div>{" "}
          <div className="text-white font-bold">&#62; </div>
          <div className="font-bold text-sm text-purple-400">Telecom</div>
        </div>

        <div className="text-3xl font-bold text-white my-4">
          Introduction To Fiber Optic Cabling
        </div>
        <div className="text-xl  text-white my-4">
          Welcome! This course is designed to give you a good understand of
          fiber optics and fiber data transmission.
        </div>

        <div className="flex items-center mt-2 mb-1">
          <span className="text-sm mr-1 font-bold text-amber-500">4.3</span>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="text-sm text-purple-400 underline font-bold mx-1 cursor-pointer">
            {" "}
            (1,504 ratings)
          </span>
          <span className="text-sm text-white  mx-1"> 4,234 students</span>
        </div>

        <div className="">
          <span className="text-sm text-white "> Credated by</span>
          <span className="text-sm text-purple-400 underline font-bold mx-1 cursor-pointer">
            {" "}
            Sebastian flores
          </span>
        </div>

        <div className="flex flex-row py-6">
          <div className="text-white">
            <BsFillPatchExclamationFill />
          </div>
          <div className="text-sm text-white pl-2"> Last updated 1/2014</div>
          <div className="text-white pl-6">
            <TbWorld />
          </div>
          <div className="text-sm text-white pl-2"> English</div>
          <div className="text-white pl-6">
            <TbKeyboard />
          </div>
          <div className="text-sm text-white pl-2"> English[Auto]</div>
        </div>
      </div>

    </div>
  );
};

export default Courseintro;
