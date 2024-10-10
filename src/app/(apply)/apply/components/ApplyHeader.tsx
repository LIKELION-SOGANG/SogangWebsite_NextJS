'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ApplyHeader = () => {
  const router = useRouter()

  const onClickReturnHome = () => {
    router.push('/')
  }
  return (
    <div className="flex flex-row justify-between ">
      <div className="font-pp text-[2rem] ">
        Like<span className="italic">Lion </span>So
        <span className="italic">gang </span>12
        <span className="italic">th </span>Re
        <span className="italic">cruitment</span>
      </div>
      <button
        onClick={onClickReturnHome}
        className="cursor-pointer p-[0.6rem_1.3rem] bg-grey text-[#b7b7b7] text-[1.3rem] font-semibold rounded-[2rem]">
        홈으로 돌아가기
      </button>
    </div>
  )
}

export default ApplyHeader
