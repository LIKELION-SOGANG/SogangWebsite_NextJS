import Image from 'next/image'
import React from 'react'

const frontEnd = ['html', 'css', 'javascript', 'react', 'git', 'github']
const backEnd = ['html', 'python', 'django', 'aws', 'git', 'github']
const mobile = [
  'css',
  'html',
  'javascript',
  'python',
  'github',
  'git',
  'react',
  'django',
  'aws',
  'styled-component',
  'spring',
  'figma',
  'github-action'
]

export default function Onboard5() {
  return (
    <section>
      <div className="flex flex-col text-white justify-center items-center bg-black w-full h-[200vh] mobile:h-[160vh]">
        <div className="font-pp text-5xl mt-[10rem]">Timeline</div>
        <div className="text-1xl mobile:text-2xl mt-[3rem]">
          멋쟁이사자처럼 서강대학교는 3월부터 11월까지 다양한 활동을 함께
          합니다.
        </div>
        <figure className="bg-black w-full h-[80vh] tablet:h-[130vh] mt-[3rem] mb-[10rem] hidden mobile:block relative">
          <Image
            src="/images/about/curriculumn.png"
            alt="curriculmn-pc"
            fill
            objectFit="contain"
          />
        </figure>
        <figure className="bg-black w-[80vw] h-[70%] mt-[3rem] mb-[10rem] block mobile:hidden relative">
          <Image
            src="/images/about/mb-curriculmn.png"
            alt="curriculmn-mobile"
            fill
            objectFit="contain"
          />
        </figure>
      </div>
      <div className="flex flex-col text-white justify-center items-center bg-black w-full h-screen">
        <div className="font-pp text-5xl">Lion Sprint</div>
        <div className="text-lg mt-[3rem] text-center block mobile:hidden">
          매주 화요일, 금요일에 진행되는 정기 세션에서
          <br /> 다양한 기술 스택을 배우고 있습니다.
        </div>
        <div className="text-2xl mt-[3rem] text-center hidden mobile:block">
          매주 화요일, 금요일에 진행되는 정기 세션에서 다양한 기술 스택을 배우고
          있습니다.
        </div>
        <div className="hidden mobile:flex w-3/5 flex-col items-center justify-center mt-24 gap-[2rem]">
          <div className="font-pp text-3xl font-thin flex items-center">
            Front-End
          </div>
          <div className="bg-white w-full h-[0.5px]"></div>
          <div className="flex gap-[1rem]">
            {frontEnd.map((el, key) => (
              <figure
                key={key}
                className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4 relative">
                <span className="w-[5vw] h-[5vw] relative">
                  <Image
                    src={`/icon/logo/stack/${el}.png`}
                    alt="sprint-front"
                    fill
                    objectFit="contain"
                  />
                </span>
              </figure>
            ))}
          </div>
        </div>
        <div className="hidden mobile:flex w-3/5 flex-col items-center justify-center mt-52 gap-[2rem] ">
          <div className="font-pp text-3xl font-thin">Back-End</div>
          <div className="bg-white w-full h-[0.5px]"></div>
          <div className="flex gap-[1rem]">
            {backEnd.map((el, key) => (
              <figure
                key={key}
                className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
                <span className="w-[5vw] h-[5vw] relative">
                  <Image
                    src={`/icon/logo/stack/${el}.png`}
                    alt="sprint-front"
                    fill
                    objectFit="contain"
                  />
                </span>
              </figure>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-24 gap-[2rem] mobile:hidden overflow-hidden">
          <div className="flex gap-[1rem]">
            {mobile.slice(0, 6).map((el, key) => (
              <figure
                key={key}
                className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-[50%] p-4">
                <span className="w-[6vw] h-[6vw] relative">
                  <Image
                    src={`/icon/logo/stack/${el}.png`}
                    alt="sprint-front"
                    fill
                    objectFit="contain"
                  />
                </span>
              </figure>
            ))}
          </div>
          <div className="flex gap-[1rem]">
            {mobile.slice(6).map((el, key) => (
              <figure
                key={key}
                className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-[50%] p-4">
                <span className="w-[6vw] h-[6vw] relative">
                  <Image
                    src={`/icon/logo/stack/${el}.png`}
                    alt="sprint-front"
                    fill
                    objectFit="contain"
                  />
                </span>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
