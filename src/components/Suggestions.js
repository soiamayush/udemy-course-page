import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { Link } from "react-router-dom"

const Suggestions = () => {
  return (
    <div className=" w-2/3 mx-12 pr-8">
      <div className="font-bold text-2xl ">Student also bought</div>
      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/76838_e5b4_6.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
              Master Computers - From Beginner to Expert in One Week
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                38 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.3</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/3749608_a8b1.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            IT network cabling: The complete fiber optics course
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                22 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.0</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/3627542_1828_3.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            IT Fundamentals - Everything you need to know about IT
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                14 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.7</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/4237634_9b79_2.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Optical Fiber Transmission Networks Using DWDM Technology
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                19 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.0</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/3975826_fb47.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Optical Fiber Access Networks Using PON/FTTH
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                16 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.4</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/2401188_de36.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            IT Network cabling :Start your cabling career now !
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                28 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.1</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/193290_727b_2.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            General Networking - wireless, routers, firewalls, Cisco NAS
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                29 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.6</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/281138_ccf8_11.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Learn Network Hacking From Scratch (WiFi & Wired)
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                13 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.2</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/164400_de47_7.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Mastering BGP in Depth on Cisco Routers
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                11 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.5</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/178304_292e_7.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            MPLS Layer 3 VPN
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                28 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.0</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/4717334_bbcc.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Overview of Fiber Optics
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                21 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.6</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/281138_ccf8_11.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            Learn Network Hacking From Scratch (WiFi & Wired)
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                18 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.2</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>

      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/3749608_a8b1.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            IT network cabling: The complete fiber optics course
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                22 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.9</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>


      <div className="flex flex-col gap-y-0 my-4 cursor-pointer">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-16 h-16"
            src="https://img-c.udemycdn.com/course/100x100/193290_727b_2.jpg"
            alt="err"
          />
          <div className="flex flex-col w-80">
            <div className="text-lg font-bold leading-6">
            General Networking - wireless, routers, firewalls, Cisco NAS
            </div>
            <div className="flex flex-row gap-x-2 m-0.5">
              <span className="border bg-amber-400 text-xs font-bold p-0.5">
                bestseller
              </span>
              <span className="text-teal-700 font-lg font-bold">
                19 total hours
              </span>
              <ul className="list-disc text-sm pl-4">
                <li>Updated 4/2022</li>
              </ul>
            </div>
          </div>

          <div className="flex felx-row">
            <span className="text-sm mr-1 font-bold text-amber-700">4.1</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>

          <div className="flex flex-row gap-x-2">
            <BsPeopleFill />
            <div className="text-sm">52,812</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-bold">₹529</div>
            <div className="text-slate-500 text-sm line-through">₹2,299</div>
          </div>

          <div>
            <BiHeartCircle style={{ fontSize: "2rem", cursor: "pointer" }} />
          </div>
        </div>
        <div className="py-4">
          <div className="border mr-12"></div>
        </div>
      </div>
      <div className="w-80 py-8">
      <Link to="/" className="whitespace-nowrap  text-sm text-neutral-900 hover:bg-slate-100 border border-neutral-900 px-72 py-2 font-bold ">
              See More
            </Link>
      </div>
    </div>
  );
};

export default Suggestions;
