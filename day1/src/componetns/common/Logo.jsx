import React from 'react'

const Logo = () => {
  return (
   <>
    <a
          href="https://youthit.com/" target='blank'
          className="flex items-center space-x-3 rtl:space-x-reverse"
          
        >
          <img
            src="https://images.pexels.com/photos/34416926/pexels-photo-34416926.jpeg"
            className="h-10 w-10 rounded-full"
            alt="Flowbite Logo"
          />
        
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            FYP
          </span>
        </a>
   </>
  )
}

export default Logo