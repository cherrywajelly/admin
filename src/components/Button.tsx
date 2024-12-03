import { ReactNode } from 'react';
import { ButtonProps } from '../types/Props';

const Button = (props: ButtonProps): ReactNode => {
  const { text, onClick, styles, disabled } = props;

  return (
    <>
      <button
        className={`flex flex-row items-center justify-center rounded-lg bg-secondary-main text-white w-40 h-10 border-none ${styles}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
