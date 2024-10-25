import React, { useEffect, useRef, useState } from 'react'

const Progress = ({ step }: { step: number }) => {
  const allSteps = ['인적사항 입력', '지원서 작성', '지원서 저장']
  const mountRef = useRef(false)
  const [progress, setProgress] = useState(Array(allSteps.length).fill(false))

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      return
    }
    setProgress(prev => {
      const newProgress = [...prev]
      newProgress[step - 1] = true
      return newProgress
    })
  }, [step])

  return (
    <div className="flex justify-between mt-[2.7rem] mb-[4rem]">
      {allSteps.map((value, index) => (
        <div
          className="flex items-center font-bold"
          key={index}>
          <div
            className={`w-[2.4rem] h-[2.4rem] mr-[0.5rem] ${progress[index] ? 'bg-black text-white ' : 'bg-white text-black border-solid border-[1px] border-[#d9d9d9]'}  rounded-[50%] flex items-center justify-center text-[1.2rem]`}>
            {index + 1}
          </div>
          <div>{value}</div>
          {allSteps.length - 1 === index ? (
            ''
          ) : (
            <div className="flex justify-center items-center ">
              <div
                className={`m-[0_1.4rem] w-[12.2rem] h-[1px] ${progress[index + 1] ? 'bg-black ' : 'bg-[#d9d9d9]'}`}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Progress
