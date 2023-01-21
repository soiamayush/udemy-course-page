import React from 'react'
import { GoWatch } from "react-icons/go"
import { MdOndemandVideo } from "react-icons/md"
import { TfiInfinite } from "react-icons/tfi"
import { CiMobile3 } from "react-icons/ci"
import { GiTrophy } from "react-icons/gi"
import { BsFillPlayCircleFill } from "react-icons/bs"
import "./Modal.css"

const Modal = () => {
  return (
    <div>
        <div className="bg-white w-80" id='sticky-div'>
    <div class="max-w-sm overflow-hidden shadow-lg">
      <div className="contain cursor-pointer">
      <img
        className="w-76"
        src="https://img-c.udemycdn.com/course/480x270/22591_b568_6.jpg"
        alt="err"
      />
      <BsFillPlayCircleFill className="icon"/> 
      <div className="preview font-bold text-white text-xl">Preview this course</div>

      </div>
      <div class="px-6 pt-4 pb-2 flex flex-row gap-x-2">
        <div class="font-bold text-3xl mb-2">₹529</div>
        <div className="text-slate-400 line-through font-lg leading-10">₹799</div>
        <div className=" font-lg leading-10">34% off</div>
      </div>
      <div className="px-6 flex flex-row gap-x-1">
        <div><GoWatch/></div>
        <div className="text-sm text-red-700 leading-4">1 day left at this price!</div>
      </div>

      <div className="flex flex-col gap-y-3 justify-center align-center m-auto w-72 my-6">
        <div className="border bg-purple-600 font-bold text-xl p-2 cursor-pointer text-white justify-center align-center flex">Add to cart</div>
        <div className="border border-black font-bold text-xl p-2 cursor-pointer text-black justify-center align-center flex">Buy now</div>
        <div className="text-xs flex align-center justify-center">30-Day Money-Back Guarantee</div>
      </div>

      <div className="flex flex-col mx-6 gap-y-4">
        <div className="font-bold">This course Includes :</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">
            <div><MdOndemandVideo/></div>
            <div className="text-xs">41 mins on-demand video</div>
          </div>

          <div className="flex flex-row gap-x-2">
            <div><TfiInfinite/></div>
            <div className="text-xs">Full lifetime access</div>
          </div>

          <div className="flex flex-row gap-x-2">
            <div><CiMobile3/></div>
            <div className="text-xs">Access on mobile and TV</div>
          </div>

          <div className="flex flex-row gap-x-2">
            <div><GiTrophy/></div>
            <div className="text-xs">Certificate of completion</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-6 mx-12 my-4">
        <div className="font-bold text-sm underline cursor-pointer">Share</div>
        <div className="font-bold text-sm underline cursor-pointer">Gift this course</div>
        <div className="font-bold text-sm underline cursor-pointer">Apply Coupon</div>
      </div>

      <div className="border my-6 w-76"></div>

      <div className="flex flex-col m-auto my-4 gap-y-3 w-72">
        <div className="font-bold text-base">Training 5 or more people?</div>
        <div className="text-sm">Get your team access to 19,000+ top Udemy courses anytime, anywhere.</div>
        <div className="border border-black font-bold text-base p-2 cursor-pointer text-black justify-center align-center flex">Try Udemy Business</div>
      </div>
    
    </div>
  </div></div>
  )
}

export default Modal