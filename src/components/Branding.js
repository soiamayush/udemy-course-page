import React from 'react'

const Branding = () => {
  return (
    <div>
    <div className='flex flex-row gap-x-6 w-full bg-black p-6'>
        <div className='text-xl font-bold text-white w-1/2 px-4'>Top companies choose <span className='text-purple-400 cursor-pointer hover:underline'>Udemy Business</span> to build in-demand career skills.</div>

        <div className='flex flex-row gap-x-4 w-1/2'>
            <img className='w-24' src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' alt='err' />
            <img className='w-12' src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' alt='err' />
            <img className='w-16' src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' alt='err' />
            <img className='w-24' src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' alt='err' />
            <img className='w-24' src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' alt='err' />
        </div>
    </div>
    <div className="border border-white"></div>
    </div>

    
  )
}

export default Branding