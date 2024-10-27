'use client'

import React, { useState } from 'react'
import LargeInput from '../components/LargeInput'
import SelectPart from '../components/SelectPart'
import { questions } from '@/utils/recruitMockData'
import SelectTimeDay from '../components/SelectTimeDay'
import SmallInput from '../components/SmallInput'
import SaveButton from '../components/SaveButton'
//
//
//
interface PersonalStatementFormProps {
  onClickStep: () => void
}

interface AnswerState {
  [key: `q${number}`]: string
}

const PersonalStatementForm = ({ onClickStep }: PersonalStatementFormProps) => {
  const [part, setPart] = useState('')
  const [answer, setAnswer] = useState<AnswerState>({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  })
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [gitHub, setGitHub] = useState('')

  const onChangeLargeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    questionNumber: number
  ) => {
    const { name, value } = e.target

    setAnswer(prevAnawer => ({
      ...prevAnawer,
      [`q${questionNumber}`]: value
    }))

    console.log(answer)
  }

  const onClickPossibleDays = (day: string, time: number) => {
    const key = `${day} - ${time}:00 ~ ${time + 1}:00`

    setSelected(prev => {
      const newSet = new Set(prev)

      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }

      return newSet
    })

    console.log(selected)
  }

  const onChangeSmallInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setGitHub(value)

    console.log(gitHub)
  }

  return (
    <div className="w-[56.2rem] flex flex-col gap-[5rem]">
      <SelectPart setPart={setPart} />

      {questions.map((item, index) => {
        const questionNumber = index + 1
        return (
          <LargeInput
            key={index}
            value={answer[`q${questionNumber}`]}
            onChangeLargeInput={e => onChangeLargeInput(e, questionNumber)}
            item={item}
            questionNumber={questionNumber}
          />
        )
      })}

      <SelectTimeDay
        selected={selected}
        onClickPossibleDays={onClickPossibleDays}
      />

      <SmallInput
        onChangeSmallInput={onChangeSmallInput}
        value={gitHub}
        name="gitURL"
        title="6. GitHub 계정이 있다면 링크를 올려주세요. (선택)"
        placeholder="ex) https://github.com/likelionsg"
      />

      <div className="mb-[4.7rem]"></div>

      <div onClick={onClickStep}>
        <SaveButton />
      </div>
    </div>
  )
}

export default PersonalStatementForm
