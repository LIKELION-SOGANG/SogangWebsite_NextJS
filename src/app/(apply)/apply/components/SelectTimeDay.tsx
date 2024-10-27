'use client'

import React, { useState } from 'react'
import { meeting } from '../../../../utils/recruitMockData'

const SelectTimeDay = ({
  onClickPossibleDays,
  selected
}: {
  onClickPossibleDays(day: string, time: number): void
  selected: Set<string>
}) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="text-[1.6rem] font-medium">
        5. 면접 가능한 날짜와 시간을 모두 선택해주세요.
      </div>
      {meeting.map((item, index1) => {
        return (
          <div
            key={index1}
            className="flex items-center">
            <div className="mr-[1.5rem] text-[#626262] text-[1.3rem]  font-medium">
              {item.interviewDate}
            </div>
            <div className="flex gap-[1rem] ">
              {item.times.map((time, index2) => {
                const isSelected = selected.has(
                  `${item.interviewDate} - ${time}:00 ~ ${time + 1}:00`
                )
                return (
                  <button
                    onClick={() =>
                      onClickPossibleDays(item.interviewDate, time)
                    }
                    key={index2}
                    className={`group flex justify-between items-center w-[125px] p-[1rem_0.8rem] rounded-[0.5rem] ${isSelected ? 'bg-black' : 'hover:border-black'} border-[1px]  border-[#d9d9d9]`}>
                    <div
                      className={`${isSelected ? '' : 'invisible group-hover:visible'}`}>
                      <svg
                        className="block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none">
                        <path
                          d="M13.7065 0.292923C14.097 0.683487 14.097 1.31776 13.7065 1.70833L5.7077 9.70708C5.31714 10.0976 4.68286 10.0976 4.2923 9.70708L0.292923 5.7077C-0.097641 5.31714 -0.097641 4.68286 0.292923 4.2923C0.683487 3.90173 1.31776 3.90173 1.70833 4.2923L5.00156 7.58241L12.2942 0.292923C12.6847 -0.097641 13.319 -0.097641 13.7096 0.292923H13.7065Z"
                          fill={`${isSelected ? 'white' : 'black'}`}
                        />
                      </svg>
                    </div>
                    <div
                      className={`${isSelected ? 'text-white' : 'text-[#b7b7b7]'}  text-[1.4rem]`}>
                      {time}:00 ~ {time + 1}:00
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectTimeDay
