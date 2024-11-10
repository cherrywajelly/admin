import { ReactNode } from 'react';
import { ButtonProps } from '../types/Props';

const SocialLoginButton = (props: ButtonProps): ReactNode => {
  const { styles, icon, text, onClick } = props;

  return (
    <div className="w-full">
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${styles}`}
        onClick={onClick}
      >
        <img src={icon} alt={text} className="mr-2" />
        <span className="m-auto">{text}</span>
      </button>
    </div>
  );
};

export default SocialLoginButton;
