import { ReactNode } from 'react';
import { ButtonProps } from '../types/Props';

const Button = (props: ButtonProps): ReactNode => {
  const { text, onClick, isClicked } = props;

  return (
    <>
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${isClicked ? 'bg-[#D0BCFF]' : 'bg-[#EADDFF]'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
