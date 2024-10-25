import SmallInput from '../components/SmallInput'
import { personalInformation } from '../../../../utils/recruitMockData'
import SelectPart from '../components/SelectPart'
import Button from '../components/Button'

const EditPersonalInfo = () => {
  const onChangeInput = () => {
    console.log('not yet')
  }

  return (
    <div className="w-[56.2rem] relative">
      <div className="flex flex-col gap-[5rem] mb-[5rem]">
        {personalInformation.map((item, index) => (
          <SmallInput
            onChangeInput={onChangeInput}
            value=""
            name="gitURL"
            key={index}
            title={item.title}
            placeholder={item.placeholder}
          />
        ))}

        <SelectPart />

        <div className="mb-[5rem]"></div>
      </div>

      <div className="absolute bottom-[1rem] w-full">
        <Button
          title="다음"
          isable={true}
        />
      </div>
    </div>
  )
}

export default EditPersonalInfo
