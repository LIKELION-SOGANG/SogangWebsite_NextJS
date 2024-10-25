import React from 'react'
interface Member {
  _id: string
  name: string
  generation: string
  type: string
}
interface TabItemProps {
  data: Member[]
}

export default function TabItem({ data }: TabItemProps) {
  const adult_lion = data.filter((member: Member) => member.type !== 'general')
  const baby_lion = data.filter((member: Member) => member.type === 'general')

  return (
    <div>
      {adult_lion?.length > 0 ? (
        <div>
          <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
            <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
            <div className="font-pretendard px-6 py-0 font-semibold text-[1.6rem] tablet:text-[2.4rem]">
              운영진
            </div>
            <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-12 px-8 py-16 pb-[18rem] mx-auto my-0 text-black pb-[6rem]">
            {adult_lion?.map(member => (
              <div
                key={member._id}
                className="flex flex-col justify-center items-center min-w-[3rem] tablet:min-w-[5rem] h-auto mx-4">
                <div className="font-pretendard text-[1.6rem] tablet:text-[2rem] font-bold mb-0">
                  {member.name}
                </div>
                <div className="font-pretendard text-[1.2rem] tablet:text-[1.4rem] font-medium"></div>
                {member.type === 'president' ? (
                  <div className="mt-[0.4rem] font-semibold">대표</div>
                ) : member.type === 'vice_president' ? (
                  <div className="mt-[0.4rem] font-semibold">부대표</div>
                ) : (
                  <div className="mt-[2.0rem] font-semibold"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
        <div className="font-pretendard px-6 py-0 font-semibold text-[1.6rem] tablet:text-[2.4rem]">
          아기사자
        </div>
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-12 px-8 py-16 pb-[18rem] max-w-[90%] mx-auto my-0 text-black pb-[18rem]">
        {baby_lion?.length > 0 ? (
          baby_lion.map(member => (
            <div
              key={member._id}
              className="font-pretendard text-[1.4rem] text-center tablet:text-[2rem] font-medium min-w-[4rem] tablet:min-w-[5rem]">
              {member.name}
            </div>
          ))
        ) : (
          <div className="font-pp text-[2.4rem] tablet:text-[3.5rem] italic">
            You Are The Next !
          </div>
        )}
      </div>
    </div>
  )
}
