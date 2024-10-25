interface ButtonProps {
  title: string
  isable: boolean
}

const Button = ({ title, isable }: ButtonProps) => {
  return (
    <div
      className={`flex justify-center items-center h-[5rem] rounded-[1rem] ${isable ? 'bg-black' : 'bg-[#d9d9d9]'} text-white shrink-0`}>
      <div className="w-[30.5rem] h-[1.9rem]  text-center text-[1.6rem] font-bold">
        {title}
      </div>
    </div>
  )
}

export default Button
