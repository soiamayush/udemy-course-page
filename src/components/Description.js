import React from 'react'

const Description = () => {
  return (
    <div className='w-2/3 pr-8'>
        <div className='flex flex-col gap-y-8 m-12'>
            <div className='border p-8'>
                <div className='text-2xl font-bold'>What you'll learn</div>
                <div className='flex flex-row gap-x-8 pt-6'>
                    <div className=''>&#10003;</div>
                    <div className=''>By the end of this course you should have a good understanding of fiber optic cabling.</div>
                </div>
            </div>

            <div className='border p-8'>
                <div className='text-xl font-bold'>Top companies offer this course to their employees</div>
                <div className='text-base text-slate-500'>This course was selected for our collection of top-rated courses trusted by businesses worldwide.<span className='underline cursor-pointer text-purple-700 px-2'>Learn More</span></div>
              
                <div className='flex flex-row gap-x-8 pt-6'>
                    <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' alt="err" className='w-24'/>
                    <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' alt="err" className='w-16'/>
                    <img src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg' alt="err" className='w-16'/>
                    <img src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' alt="err" className='w-24'/>
                    <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' alt="err" className='w-24'/>
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='text-2xl font-bold'>Requirements</div>
                <div className='text-lg pl-4'>
                    <ul className='list-disc'>
                        <li>There are no requirements to take this course, I try to explain everything in a way anyone can understand it.</li>
                        <li>Willingness to learn.</li>
                    </ul>
                </div>
            </div>

            <div className=''>
            <div className='text-2xl font-bold'>Description</div>
                <div className='pt-4'>
                    <span className='text-sm'>For years there has been a need for that faster internet connection. People rely on the internet for almost everything, information/research, streaming movies from popular services like netflix or hulu, online gaming, even with mobile phones there is a need for that faster connection. Fiber Optics is the answer! Our old copper based cabling simply wont support the speeds and data capacity needed this day in age. Big companies such as AT&T/Verizon & even the U.S. Government have invested in updating our old copper cabling to Fiber Optic Cabling. So why is it not everywhere? After investing billions in upgrading our old copper cabling to fiber cabling the communications industry realized the man power simply isn't there to install it fast enough. What does this mean? It means there are a lot of jobs out there in this field, the need for fiber optic professionals is high. I am here to teach you the basics of fiber optics. A lot of this course is based off of the curriculum I teach at the University of Riverside that gives students a CFOT(Certified Fiber Optic Technician) Certificate from the FOA(Fiber Optics Association).</span>
                    
                    <div className='text-sm font-bold'>
                    This course is intended for anyone who wants to learn the basics of fiber optics, maybe you are curious about the buzz around fiber optics, or maybe you are a systems administrator and IT manager that wants to gain knowledge of fiber optics. Whatever the case, this course is for you!
                    </div>
                    
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='text-2xl font-bold'>Who this course is for:</div>
                <div className='text-sm pl-6'>
                    <ul className='list-disc'>
                        <li className='pb-2'>Anyone who is interested in learning fiber optic cabling, a background in IT or Telecom is helpful but not needed.</li>
                        <li>IT Professionals</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Description