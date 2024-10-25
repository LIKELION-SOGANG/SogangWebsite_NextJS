'use client'

import { useState } from 'react'
import { FAQObj } from '../../../../utils/recruitMockData'
import ArrowLink from '../../../../../public/icon/button/FAQ-arrow-button.svg'

interface Items {
  items: FAQObj[]
}

const FAQItem = ({ items }: Items) => {
  const [open, setOpen] = useState(Array(items.length).fill(false))
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className="font-pp max-tablet:text-[2.4rem] text-[3.2rem] italic">
        FAQ
      </div>
      <div className="w-full max-w-[97rem]">
        {items.map((item, index) => {
          return (
            <div
              key={item.Q}
              className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] rounded-[1rem]">
              <div className="justify-between text-[1.6rem] font-semibold flex items-center">
                <div className="">{item.Q}</div>
                <button
                  onClick={() =>
                    setOpen(prev => {
                      const temp = [...prev]
                      temp[index] = !temp[index]
                      return temp
                    })
                  }
                  className={`${open[index] ? 'rotate-180 ' : null} transition-all`}>
                  <ArrowLink />
                </button>
              </div>
              <div
                className={`${open[index] ? 'mt-[1.4rem]' : 'max-h-0 mt-0'} overflow-hidden transition-all ease-in-out font-medium text-[1.6rem] whitespace-pre-line`}>
                {item.A}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQItem
