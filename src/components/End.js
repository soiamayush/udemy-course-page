import React from 'react'
import { Link } from "react-router-dom"

const End = () => {
  return (
    <div className='w-full h-16 bg-black flex justify-between'>
        <div className='logo px-8'>
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-8"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt=""
              />
            </Link>
        </div>

        <div className='naming text-stone-50 px-8 text-xs '>
        © 2023 Udemy, Inc.
        </div>

    </div>
  )
}

export default End