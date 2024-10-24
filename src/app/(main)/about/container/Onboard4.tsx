import Image from 'next/image'
import React from 'react'

const companies = [
  'samsung',
  'coupang',
  'kaist',
  'lg',
  'naver',
  'shinsegae',
  'sk'
]

export default function Onboard4() {
  return (
    <section className="overflow-hidden w-[screen] h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="font-pp cursor-pointer text-4xl tablet:text-6xl font-normal">
        From Like<span className="italic">lion</span> So
        <span className="italic">gangs</span>
      </div>
      <div className="text-1xl tablet:text-3xl mt-4 tablet:mt-10">
        멋쟁이사자처럼 서강대학교 알럼나이들의 Possibility to Reality
      </div>
      <div className="">
        <div
          className={`w-full tablet:w-max flex mt-[15rem] justify-center tablet:justify-start items-center gap-[4rem] tablet:gap-[8rem] overflow-hidden`}>
          {companies.map((el, i) => (
            <span
              key={i}
              className="relative h-[4rem] tablet:h-[5rem] w-[8rem] tablet:w-[20rem]">
              <Image
                src={`/icon/logo/company/${el}.png`}
                alt="possibility"
                fill
                objectFit="contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
