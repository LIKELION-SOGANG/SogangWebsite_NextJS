import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Onboard3() {
  return (
    <section>
      <div className="w-full h-[80vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="font-pp cursor-pointer text-6xl mobile:text-8xl">
          Like<span className="italic">lion</span> So
          <span className="italic">gang</span>
        </div>
        <div className="text-2xl mobile:text-4xl mt-[2rem]">BY THE NUMBERS</div>
      </div>
      <div className="text-2xl mobile:text-4xl w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div>
          <span className="font-pp text-[20rem] font-light tablet:font-normal">
            9
          </span>
          <span className="font-medium">년</span>
        </div>
        <div className="mt-12 font-black mb-8">운영기간</div>
        <div className="font-light">
          멋쟁이사자처럼 서강대는 2016년부터 끊임없이 달려왔습니다.
        </div>
      </div>
      <div className="text-2xl mobile:text-4xl w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="relative">
          <span className="font-pp text-[18rem] font-light ">100</span>
          <span className="text-[4rem] tablet:text-[8rem] font-thin absolute -top-40">
            +
          </span>
        </div>
        <div className="mt-12 font-black mb-8">프로젝트 수</div>
        <div className="font-light text-center">
          해커톤, 아이디어톤, 신촌톤, 데모데이를 포함하여
          <br />
          100여개의 프로젝트를 진행했습니다.
        </div>
      </div>
      <div className="text-2xl mobile:text-4xl w-full h-[75vh] bg-black text-white flex flex-col justify-center items-center">
        <div className="relative">
          <span className="font-pp text-[18rem] font-light">120</span>
          <span className="text-[4rem] tablet:text-[8rem] font-thin absolute -top-40">
            +
          </span>
        </div>
        <div className="mt-12 font-black mb-8">가입 회원 수</div>
        <div className="font-light">
          매년 새로운 아기사자들이 멋쟁이사자처럼과 함께 하고 있습니다.
        </div>
      </div>
      <div className="w-full h-screen flex items-center bg-black text-white">
        <div className="tablet:relative w-full h-auto flex flex-col tablet:flex-row items-end">
          <figure className="h-[40rem] w-full tablet:w-1/2 relative">
            <Image
              fill
              src={'/images/about/hackathon.png'}
              alt="hackathon"
              sizes="(max-width: 768px) 100%, 50%"
            />
          </figure>
          <div className="w-full tablet:w-1/2 h-auto flex flex-col justify-end pl-12 -translate-y-[6rem] tablet:translate-y-0 tablet:absolute tablet:right-0 tablet:bottom-0">
            <div className="font-pp text-[3rem] tablet:text-9xl">Awards</div>
            <nav className="mt-16 flex flex-col gap-3 text-2xl">
              <a
                className="group w-fit"
                target="_blank"
                href="https://platum.kr/archives/212513">
                <span className="hidden tablet:block">
                  2023.08 | 멋쟁이사자처럼 전국 연합 해커톤 3위 (효자동개발자
                  팀)↘
                </span>
                <span className="block tablet:hidden text-[1.2rem]">
                  <div className="font-black">2023.08</div>
                  멋쟁이사자처럼 전국 연합 해커톤 3위 (효자동개발자 팀)↘
                </span>
                <div className="bg-black w-full h-[0.5px] group-hover:animate-scaleLeft group-hover:bg-white"></div>
              </a>
              <a
                className="group w-fit"
                target="_blank"
                href="https://www.instagram.com/p/CTNGreslBDy/?img_index=1">
                <span className="hidden tablet:block">
                  2021.08 | 멋쟁이사자처럼 전국 연합 해커톤 1위 (
                  <span className="font-pp">URL repo</span> 팀) ↘
                </span>
                <span className="block tablet:hidden text-[1.2rem]">
                  <div className="font-black">2021.08</div>
                  멋쟁이사자처럼 전국 연합 해커톤 1위 (
                  <span className="font-pp">URL repo</span> 팀) ↘
                </span>
                <div className="bg-black w-full h-[0.5px] group-hover:animate-scaleLeft group-hover:bg-white"></div>
              </a>
              <a
                className="group w-fit"
                target="_blank"
                href="https://www.instagram.com/p/CRbGH4rjBW2/?img_index=1">
                <span className="hidden tablet:block">
                  2021.07 | 멋쟁이사자처럼 전국 연합 아이디어톤 1위 (
                  <span className="font-pp">URL repo</span> 팀) ↘
                </span>
                <span className="block tablet:hidden text-[1.2rem]">
                  <div className="font-black">2021.07</div>
                  멋쟁이사자처럼 전국 연합 아이디어톤 1위 (
                  <span className="font-pp">URL repo</span> 팀) ↘
                </span>
                <div className="bg-black w-full h-[0.5px] group-hover:animate-scaleLeft group-hover:bg-white"></div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
