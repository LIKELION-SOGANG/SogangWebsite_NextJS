'use client'
import React from 'react'
import { scheduleObj } from '../../../../utils/recruitMockData'
import { areaObj } from '../../../../utils/recruitMockData'
import { FAQObj } from '../../../../utils/recruitMockData'
import FAQItem from '../components/FAQItem'
import AreaItem from '../components/AreaItem'
import ScheduleItem from '../components/ScheduleItem'
//
//
//
const Recruit2 = ({
  detectRef
}: {
  detectRef: React.MutableRefObject<HTMLDivElement | null>
}) => {
  return (
    <div
      ref={detectRef}
      className="p-[4rem] text-black">
      <ScheduleItem items={scheduleObj} />
      <AreaItem items={areaObj} />
      <FAQItem items={FAQObj} />
    </div>
  )
}

export default Recruit2
