import { TabBtnProps } from '@/type/project'

export default function TabBtn({
  generation,
  isSelected,
  onClickTab
}: TabBtnProps) {
  return (
    <div
      onClick={() => {
        onClickTab(generation)
      }}
      className={`border-none tablet:border-solid border border-white text-right tablet:text-center rounded-2xl tablet:px-4 tablet:pt-[14px] tablet:pb-[8px] font-pp text-[24px] italic leading-none tablet:leading-[0.6] font-normal cursor-pointer tablet:hover:bg-white tablet:hover:text-black tablet:hover:mix-blend-screen transition-color duration-200 ease-in-out ${isSelected ? 'text-white tablet:bg-white tablet:text-black tablet:mix-blend-screen' : 'text-[#686868] tablet:text-white tablet:bg-transparent'}`}>
      {generation}th
    </div>
  )
}
