'use client'

import React from 'react'
import ScrollLottie from '../components/ScrollLottie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Recruit1Props {
  recruit1ImgRef: React.MutableRefObject<HTMLDivElement | null>
}

const Recruit1 = ({ recruit1ImgRef }: Recruit1Props) => {
  const router = useRouter()

  const onClickApply = () => {
    router.push('/apply')
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-end">
        <div className="pointer-events-none w-[1270px]  h-[1270px] relative m-[36px_0_150px_200px] max-tablet:ml-0 box-border flex justify-end">
          <div
            ref={recruit1ImgRef}
            className="transition-opacity duration-500 ease-in-out w-[1270px] h-[1270px] // max-tablet:right-[-50rem] max-mobile:right-[-62.5rem] max-desktop:right-[-20rem] // max-tablet:top-[-10rem] // absolute flex justify-center">
            <Image
              src="/images/recruit/obj2.png"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, 1270px"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-white absolute font-pp max-tablet:top-[23.8rem] top-[35rem] text-center italic text-[9rem] max-desktop:text-[9rem] max-tablet:text-[4.5rem]">
          Want To <br className="tablet:hidden" />
          Join Us?
        </div>

        <button
          onClick={onClickApply}
          className="cursor-pointer text-black text-[2rem] p-[1.5rem_3rem] max-tablet:hidden absolute top-[50rem] rounded-[3rem] bg-white">
          APLLY NOW
        </button>

        <div
          onClick={onClickApply}
          className="cursor-pointer tablet:hidden absolute w-[10rem] h-[10rem] top-[45.4rem] right-[2.5rem] rounded-full bg-white flex items-center justify-center">
          <span className="text-black text-[1.6rem] text-center whitespace-pre-line">{`APLLY\nNOW`}</span>
        </div>
        <div className="absolute top-[75rem]">
          <ScrollLottie />
        </div>
      </div>
    </div>
  )
}

export default Recruit1
