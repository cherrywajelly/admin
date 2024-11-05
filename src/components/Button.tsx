import { ButtonProps } from '../types/Props';

const Button = (props: ButtonProps) => {
  const { styles, text } = props;

  return (
    <>
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full bg-[#EADDFF] ${styles}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
