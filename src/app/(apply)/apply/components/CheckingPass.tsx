import React from 'react'
import SmallInput from './SmallInput'
import Button from './Button'
import Passed from './Passed'
import Nonpassed from './Nonpassed'

const CheckingPass = () => {
  const onChangeInput = () => {
    console.log('not yet')
  }
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-[56.2rem]">
        <SmallInput
          onChangeInput={onChangeInput}
          value=""
          name="gitURL"
          title=""
          placeholder="이메일로 발송된 고유 번호를 입력해주세요."
        />
        <div className="mb-[1.2rem]"></div>
        <Button
          title="최종 합격 여부 확인하기"
          isable={false}
        />
      </div>
      <Passed />
      <Nonpassed />
    </div>
  )
}
