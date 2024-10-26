import React from 'react'

const SelectPart = ({
  setPart
}: {
  setPart: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div className="text-[1.6rem]">
      <div className="text-[#424242] font-medium mb-[1.3rem]">지원분야</div>
      <div className="relative">
        <select
          onChange={e => setPart(e.target.value)}
          className="w-full border-[1px] border-[#B7B7B7] p-[1.5rem] rounded-[1rem] appearance-none">
          <option value="">지원 분야를 선택해주세요.</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
        </select>
        <div className="pointer-events-none absolute top-[50%] right-[2rem] trnasform translate-y-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none">
            <g clipPath="url(#clip0_1272_398)">
              <path
                d="M1.22284 7.5H11.2736C11.9689 7.5 12.3166 8.33984 11.8244 8.83203L6.80097 13.8594C6.49628 14.1641 6.00019 14.1641 5.6955 13.8594L0.672063 8.83203C0.179875 8.33984 0.527531 7.5 1.22284 7.5Z"
                fill="#B7B7B7"
              />
            </g>
            <defs>
              <clipPath id="clip0_1272_398">
                <rect
                  width="12.5"
                  height="20"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SelectPart
