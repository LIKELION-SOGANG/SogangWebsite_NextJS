import Image from 'next/image'
import React from 'react'

export default function Onboard1() {
  return (
    <section>
      <div className="text-white w-full h-[100vh] bg-black relative">
        <span className="absolute w-[50vw] h-[47rem]">
          <Image
            className="blur-[5px]"
            src="/images/about/obj1.png"
            alt="object1"
            fill
            objectFit="contain"
          />
        </span>
        <span className="absolute w-[36rem] h-[54rem] top-[20vh] right-0">
          <Image
            className="origin-top-right scale-120"
            src="/images/about/obj2.png"
            alt="object2"
            fill
            objectFit="contain"
          />
        </span>
        <span className="absolute w-[72rem] h-[65rem] top-[70vh] left-[15vw]">
          <Image
            className="origin-top-right scale-75"
            src="/images/about/obj3.png"
            alt="object3"
            fill
            objectFit="contain"
          />
        </span>
        <div className="font-pp text-[28vw] flex items-end absolute top-[25vh] right-[50%] translate-x-[50%]">
          <span>Like</span>
          <span className="italic">lion</span>
        </div>
        <span className="absolute right-20 top-[85vh] w-[15rem] h-[8rem]">
          <Image
            src="/images/about/caption-possible-white.svg"
            alt="possible-caption"
            fill
            objectFit="contain"
          />
        </span>
      </div>
      <div className="text-white w-full h-[100vh] bg-black flex items-center overflow-x-hidden">
        <div className="bg-white text-black text-2xl tablet:text-4xl font-medium -rotate-[10deg] w-[300vw] whitespace-nowrap -translate-x-[10rem]">
          ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER
        </div>
      </div>
    </section>
  )
}
