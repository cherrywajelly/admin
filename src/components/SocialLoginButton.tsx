import { ButtonProps } from '../types/Props';

const SocialLoginButton = (props: ButtonProps) => {
  const { styles, icon, text } = props;

  return (
    <div className="w-full">
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${styles}`}
      >
        <img src={icon} alt={text} className="mr-2" />
        <span className="m-auto">{text}</span>
      </button>
    </div>
  );
};

export default SocialLoginButton;
