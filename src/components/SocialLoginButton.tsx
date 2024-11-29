import { ReactNode } from 'react';
import { SocialLoginButtonProps } from '../types/Props';
import { getEnv } from '../utils/utils';

const getAuthURL = (social: string, role: string): string => {
  const clientId = getEnv(`VITE_${social.toUpperCase()}_CLIENT_ID`);
  const redirectUri = getEnv(`VITE_${role.toUpperCase()}_${social.toUpperCase()}_REDIRECT_URI`);

  let authURL: string = '';
  switch (social) {
    case 'kakao':
      authURL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      break;
    case 'google':
      authURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email&access_type=offline`;
      break;
  }

  return authURL;
};

const SocialLoginButton = (props: SocialLoginButtonProps): ReactNode => {
  const { social, role, styles, icon, text } = props;

  const handleSocialLogin = (): void => {
    window.location.href = getAuthURL(social, role);
  };

  return (
    <div className="w-full">
      <button
        className={`flex flex-row items-center justify-center py-2 px-4 rounded-lg w-full ${styles}`}
        onClick={handleSocialLogin}
      >
        <img src={icon} alt={text} />
        <span className="m-auto">{text}</span>
      </button>
    </div>
  );
};

export default SocialLoginButton;
