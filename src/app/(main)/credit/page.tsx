import Image from 'next/image'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'
//
//
//
export const metadata: Metadata = {
  title: 'Credits · 서강대 멋사',
  description:
    '서강대학교 멋쟁이사자처럼의 공식 홈페이지입니다. 서강대학교 멋쟁이사자처럼의 역사, 수상내역, 알럼나이 아웃풋, 타임라인에 대해 소개합니다. 정기 교육 세션인 Lion Sprint에서 배우는 기술 스택들을 소개합니다. '
}
//
//
//
export default function CreditPage() {
  return (
    <main
      className={`relative`}
      style={{ zIndex: PAGE }}>
      <div className="bg-black w-full h-full">
        <div className="flex flex-col justify-center font-pp text-white">
          <h3
            className={`text-center text-[2.5rem] pt-64
            mobile:text-[2.5rem]
            tablet:text-[3rem]
            desktop:text-[3rem]`}>
            CREDITS
          </h3>

          <ul
            className={`flex flex-col gap-24 py-[10vw] mb-[18vw]
              mobile:ml-[5vw] mobile:mb-[7vw]
              tablet:mb-0 tablet:py-[6vw]
            desktop:py-[4vw] desktop:px-[8vw] desktop:ml-[13vw] desktop:mb-8 desktop:gap-20`}>
            {/* Design Section */}
            <li
              className={`flex justify-between items-start gap-10 pl-[14vw] 
              desktop:ml-24 desktop:pl-4`}>
              <p
                className={`text-right w-[35%] text-[1.6rem] whitespace-nowrap 
                desktop:text-[1.9rem]`}>
                Design
              </p>
              <p
                className={`leading-10 flex-grow text-[1.6rem] desktop:text-[1.9rem]`}>
                Sunmyeong Lee
                <br />
                Koeun Jeong
              </p>
            </li>

            {/* Front-End Develop Section */}
            <li
              className={`flex justify-between items-start gap-10 pl-[14vw] 
              desktop:ml-24 desktop:pl-4`}>
              <p
                className={`text-right w-[35%] text-[1.6rem] 
                desktop:text-[1.9rem] desktop:whitespace-nowrap `}>
                Front-End Develop
              </p>
              <p
                className={`leading-10 flex-grow text-[1.6rem] desktop:text-[1.9rem]`}>
                Inyoung Jung
                <br />
                Sunmyeong Lee
                <br />
                Koeun Jeong
                <br />
                Sehwan Jang
              </p>
            </li>

            {/* Back-End Develop Section */}
            <li
              className={`flex justify-between items-start gap-10 pl-[14vw] 
              desktop:ml-24 desktop:pl-4`}>
              <p
                className={`text-right w-[35%] text-[1.6rem]
                desktop:text-[1.9rem] desktop:whitespace-nowrap`}>
                Back-End Develop
              </p>
              <p
                className={`leading-10 flex-grow text-[1.6rem] desktop:text-[1.9rem]`}>
                Yuyi Kim
                <br />
                Jeongyeon Lim
              </p>
            </li>
            {/* TF Section */}
            <li
              className={`flex justify-between items-start gap-10 pl-[14vw] 
              desktop:ml-24 desktop:pl-4`}>
              <p
                className={`text-right w-[35%] text-[1.6rem]
                desktop:text-[1.9rem] desktop:whitespace-nowrap`}>
                Task-Force
              </p>
              <p
                className={`leading-10 flex-grow text-[1.6rem] desktop:text-[1.9rem]`}>
                Byul Kim
                <br />
                Minwoo Yoo
                <br />
                Seoa Kim
                <br />
                Inyoung Chung
                <br />
                Bohyun Choi
                <br />
                Kyeongwoo Kim
              </p>
            </li>
          </ul>

          <p className="text-center text-[2.7rem]">✽</p>
          <div>
            <div className="flex justify-center pt-12 mt-4">
              <Image
                src="/images/credit/sgLogo-Black.png"
                alt="Sogang University logo"
                width={60}
                height={50}
                layout="fixed"
                style={{ objectFit: 'contain' }}
              />
              <p className="text-[3rem] tablet:text-[4.5rem] desktop:text-[4.5rem]">
                Like<span className="italic">lion</span> So
                <span className="italic">gang</span>
              </p>
            </div>
            <p
              className="text-center text-[1.1rem] pt-14 px-[10vw] 
              tablet:px-[22vw] tablet:text-[1.2rem]
            desktop:text-[1.2rem] desktop:px-[30vw]">
              Likelion Sogang, a leading IT startup club at Sogang University,
              empowers members to bring their ideas to life, fostering
              innovation, and achieving notable success with the motto, "Let's
              actualize our ideas with our own hands!"
            </p>
            <p className="text-center text-[1.2rem] pt-12 pb-40">
              © Likelion Sogang. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
