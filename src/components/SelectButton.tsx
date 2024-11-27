import { ReactNode } from 'react';
import { ButtonProps } from '../types/Props';

const SelectButton = (props: ButtonProps): ReactNode => {
  const { text, onClick, isClicked, styles } = props;

  return (
    <>
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${isClicked ? 'bg-gray-80 text-white' : 'bg-white border border-gray-80'} ${styles}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default SelectButton;
