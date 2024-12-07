import { ReactNode, useEffect } from 'react';
import { getEnv } from '../../utils/utils';
import { SocialAuthCallbackProps } from '../../types/Props';
import Cookies from 'js-cookie';
import { getAuthToken } from '../../api/login';

const SocialAuthCallback = (props: SocialAuthCallbackProps): ReactNode => {
  const { social, role, version } = props;

  useEffect((): void => {
    const handleAuth = async (): Promise<void> => {
      try {
        const code = new URLSearchParams(window.location.search).get('code');

        if (!code) throw new Error('인증 코드가 없습니다.');

        const { accessToken, refreshToken, isNew } = await getAuthToken(social, code, version);

        if (accessToken && refreshToken) {
          sessionStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          Cookies.set('accessToken', accessToken, {
            expires: 7,
            sameSite: 'Lax',
            secure: getEnv('MODE') === 'production',
          });
        }

        window.location.href = isNew
          ? '/signup'
          : role === 'admin'
            ? `/${role}/dashboard`
            : `/${role}/icons`;
      } catch (error) {
        alert((error as Error).message);
        window.location.href = '/login';
      }
    };

    handleAuth();
  }, []);

  return <></>;
};

export default SocialAuthCallback;
