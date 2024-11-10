import { ReactNode } from 'react';
import { ButtonProps } from '../types/Props';

const Button = (props: ButtonProps): ReactNode => {
  const { text, onClick, isClicked } = props;

  return (
    <>
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${isClicked ? 'bg-gray-80 text-white' : 'bg-white border border-gray-80'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
