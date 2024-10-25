'use client'

import React, { useState } from 'react'
import Button from '../components/Button'
import SmallInput from '../components/SmallInput'
import PersonalInformationForm from './PersonalInformationForm'
import PersonalStatementForm from './PersonalStatementForm'
import Progress from '../components/Progress'
import SaveComplete from './SaveComplete'

const ApplySection = () => {
  const [step, setStep] = useState(0)

  const onClickStep = () => {
    setStep(prev => prev + 1)
    window.scrollTo(0, 0)
  }

  const onChangeInput = () => {
    console.log('not yet')
  }

  return (
    <section className="overflow-x-hidden pt-[2rem] bg-white text-black">
      <div className="flex flex-col items-center h-full">
        <div className="w-[56.2rem]">
          {step !== 0 ? <Progress step={step} /> : null}

          {step === 0 ? (
            <div>
              <div className="mb-[15rem]"></div>

              <div>
                <div className="text-[1.6rem] font-medium mb-[1.2rem]">
                  처음 지원서를 작성하신다면,
                </div>
                <div
                  onClick={onClickStep}
                  className="cursor-pointer">
                  <Button
                    title="지원서 생성하기"
                    isable={true}
                  />
                </div>
              </div>

              <div className="mb-[7rem]"></div>

              <div>
                <SmallInput
                  onChangeInput={onChangeInput}
                  value=""
                  name="uniqueNumber"
                  title="이미 작성하던 지원서가 있으시다면,"
                  placeholder="이메일로 발송된 고유번호를 입력해주세요."
                />
                <div className="mb-[1.2rem]"></div>
                <Button
                  title="지원서 수정하기"
                  isable={false}
                />
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <PersonalInformationForm onClickStep={onClickStep} />
          ) : null}

          {step === 2 ? (
            <PersonalStatementForm onClickStep={onClickStep} />
          ) : null}

          {step === 3 ? <SaveComplete /> : null}
        </div>
      </div>
    </section>
  )
}

export default ApplySection
