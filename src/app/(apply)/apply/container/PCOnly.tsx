'use client'

import React from 'react'
import CloseXWhite from '../../../../../public/icon/button/closeX-white.svg'
import { PCONLY_MODAL } from '@/style/zIndex'
import { useRouter } from 'next/navigation'

const PCOnly = () => {
  const router = useRouter()

  const onClickCloseXWhite = () => {
    router.push('/recruit')
  }

  return (
    <main
      className="w-screen h-screen bg-black fixed py-[5rem] px-[3rem] flex flex-col justify-between text-white"
      style={{ zIndex: PCONLY_MODAL }}>
      <div className="flex justify-between ">
        <div className="font-pp text-[2rem]">
          Like<span className="italic ">lion</span> So
          <span className="italic">gang</span>
        </div>
        <button onClick={onClickCloseXWhite}>
          <CloseXWhite />
        </button>
      </div>
      <div className="whitespace-pre-line text-[2.4rem] font-medium font-pretendard">
        {'지원서 작성은\nPC에서만 가능합니다.'}
      </div>
      <div className="font-pp text-[2.4rem] font-extralight whitespace-pre-line flex flex-col items-end">
        <div className="mr-[2.7rem]  italic">{'Possibility\n'}</div>
        <div className="flex">
          <p className="text-[1.4rem] font-Pp mr-[0.3rem]">to</p>
          <span className="italic">Reality</span>
        </div>
      </div>
    </main>
  )
}

export default PCOnly
