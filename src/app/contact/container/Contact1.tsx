import React from 'react'

export default function Contact1() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          className="absolute w-[48rem] h-[48rem] left-[18rem] top-[-15rem]"
          src="/images/contact/obj1.png"
        />
      </div>
      <div className="flex justify-end relative w-full h-full mt-[150px]">
        <img
          className="w-[35vw] h-[35vw] md:w-[500px] md:h-[500px] origin-top-left"
          src="/images/contact/obj2.png"
        />
      </div>
      <div className="text-center mt-[-230px]">
        <div className="text-black text-[64px] font-pp font-thin">
          Connect With Us!
        </div>
      </div>
    </div>
  )
}