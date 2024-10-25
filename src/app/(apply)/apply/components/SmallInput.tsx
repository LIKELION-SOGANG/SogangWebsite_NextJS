import React from 'react'

interface SmallInputProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name: string
  value: string
  title: string
}

const SmallInput = ({
  title,
  placeholder,
  name,
  value,
  onChangeInput
}: SmallInputProps) => {
  return (
    <div>
      <div className="text-[1.6rem] font-medium mb-[1.2rem]">{title}</div>
      <input
        className="text-[1.5rem] border-[1px] border-[#B7B7B7] w-full h-[5rem] shrink-0 rounded-[1rem]  p-[1.6rem_1.4rem]"
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChangeInput}></input>
    </div>
  )
}

export default SmallInput
