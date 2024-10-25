'use client'

import React, { useEffect, useState } from 'react'
import TabItem from '../components/TabItem'
import { Member } from '@/models/member-schema'
//
//
//
interface Member {
  _id: string
  name: string
  generation: string
  type: string
}
interface SecondSectionProps {
  Members: Member[]
}
//
//
//
export default function SecondSection({ Members }: SecondSectionProps) {
  const [tabList, setTabList] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState<number>()
  const [leftTab, setLeftTab] = useState<number[]>([])
  const [rightTab, setRightTab] = useState<number[]>([])
  const [lions, setLions] = useState<Member[]>([])

  useEffect(() => {
    const generations = Array.from(
      new Set(Members.map((member: Member) => parseInt(member.generation, 10)))
    ).sort((a, b) => a - b)
    setTabList(generations)
    setSelectedTab(parseInt(Members[Members.length - 1].generation))
  }, [Members])

  useEffect(() => {
    if (selectedTab) {
      setLeftTab(tabList.filter(gen => gen < selectedTab))
      setRightTab(tabList.filter(gen => gen > selectedTab))
      setLions(
        Members.filter(
          (member: Member) => parseInt(member.generation) === selectedTab
        )
      )
    }
  }, [selectedTab, tabList])

  const handleTabClick = (gen: number) => {
    setSelectedTab(gen)
  }

  return (
    <section>
      <div className="relative w-full bg-white">
        <div className="flex justify-center items-end overflow-hidden">
          <div className="flex justify-end w-[33%]">
            {leftTab.map(gen => (
              <div
                key={gen}
                onClick={() => handleTabClick(gen)}
                className="font-pp p-[1rem] cursor-pointer hover:text-black text-[3.2rem] tablet:text-[3.6rem] text-[#B7B7B7] mb-[0rem] italic">
                {gen}
                th
              </div>
            ))}
          </div>
          <div
            key={selectedTab}
            className="font-pp p-[1rem] cursor-pointer text-[4.8rem] tablet:text-[9.6rem] text-black mb-[-0.8rem] tablet:mb-[-3rem] italic">
            {selectedTab}
            th
          </div>
          <div className="flex justify-start w-[33%]">
            {rightTab.map(gen => (
              <div
                key={gen}
                onClick={() => handleTabClick(gen)}
                className="font-pp p-[1rem] cursor-pointer hover:text-black text-[3.2rem] tablet:text-[3.6rem] text-[#B7B7B7] mb-[0rem] italic">
                {gen}
                th
              </div>
            ))}
          </div>
        </div>
        <TabItem data={lions} />
      </div>
    </section>
  )
}
