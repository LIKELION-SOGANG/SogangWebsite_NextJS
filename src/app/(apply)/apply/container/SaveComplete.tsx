import React from 'react'
import LikelionGreyLogo from '../../../../../public/icon/logo/likelion-grey.svg'
import { useRouter } from 'next/navigation'

const SaveComplete = () => {
  const router = useRouter()

  const onClickReturnHome = () => {
    router.push('/')
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <LikelionGreyLogo />
        </div>
        <div className="mt-[3.4rem] text-[1.6rem] font-bold">
          김경우 님, 지원서 저장이 완료되었습니다.
        </div>
        <div className="text-[1.2rem] font-medium">
          likelion@sogang.ac.kr로 발송된 고유 번호를 입력하여 지원서를 수정할 수
          있습니다.
        </div>
        <div className="mt-[1.2rem] text-[#b7b7b7] text-[1.2rem] font-semibold">
          최종 제출 시각: {new Date().toLocaleDateString()}
          <span> </span>
          {new Date().toLocaleTimeString()}
        </div>

        <div className="flex mt-[5.8rem] gap-[0.8rem]">
          <div
            onClick={onClickReturnHome}
            className="cursor-pointer p-[0.6rem_1.3rem] bg-grey text-[#b7b7b7] text-[1.3rem] font-semibold rounded-[2rem]">
            홈으로 돌아가기
          </div>
          <div className="cursor-pointer p-[0.6rem_1.3rem] bg-grey text-[#b7b7b7] text-[1.3rem] font-semibold rounded-[2rem]">
            지원서 수정하기
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveComplete
