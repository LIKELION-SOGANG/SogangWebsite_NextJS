'use client'

import React, { useState } from 'react'
import SmallInput from '../components/SmallInput'
import Button from '../components/Button'
import {
  personalInformation,
  personalPhoneNumber
} from '@/utils/recruitMockData'
import { stringify } from 'querystring'

//
//
//

interface PersonalStatementFormProps {
  onClickStep: () => void
}

interface InfoState {
  name: string
  studentNumber: string
  email: string
  phoneNumber: string
}

const PersonalInformationForm = ({
  onClickStep
}: PersonalStatementFormProps) => {
  const [info, setInfo] = useState<InfoState>({
    name: '',
    studentNumber: '',
    email: '',
    phoneNumber: ''
  })

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInfo(prevInfo => ({
      ...prevInfo,
      [name as keyof InfoState]: value
    }))

    // console.log(info)
  }

  return (
    <div className="w-[56.2rem] ">
      <div className="flex flex-col gap-[5rem] mb-[5rem]">
        {personalInformation.map((item, index) => (
          <SmallInput
            key={index}
            onChangeInput={onChangeInput}
            value={info[item.name as keyof InfoState]}
            name={item.name}
            title={item.title}
            placeholder={item.placeholder}
          />
        ))}

        <SmallInput
          onChangeInput={onChangeInput}
          value={info.phoneNumber}
          name="phoneNumber"
          title={personalPhoneNumber.title}
          placeholder={personalPhoneNumber.placeholder}
        />
      </div>

      <div
        onClick={onClickStep}
        className="pb-[1rem] mt-[19.6rem] cursor-pointer">
        <Button
          title="입력한 이메일로 고유 번호 전송"
          isable={true}
        />
      </div>
    </div>
  )
}

export default PersonalInformationForm
