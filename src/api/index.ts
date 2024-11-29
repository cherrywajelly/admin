import { getEnv } from '../utils/utils';
import { MethodType } from '../types/Enums';

const BASE_URL = getEnv('VITE_API_URL');

const getHeaders = (isFormData: boolean, token?: string): HeadersInit => {
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : { 'Content-Type': 'application/json' };

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  return headers;
};

const refreshAccessToken = async (refreshToken: string): Promise<string> => {
  const response = await fetch(
    `${BASE_URL}/api/v1/members/refreshToken`,
    {
      method: MethodType.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to refresh access token');
  }

  const { accessToken } = await response.json();
  sessionStorage.setItem('accessToken', accessToken);

  return accessToken;
};

export const apiRequest = async (
  endpoint: string,
  method: MethodType | undefined = MethodType.GET,
  body?: BodyInit | object | null | undefined
): Promise<Response> => {
  const accessToken = sessionStorage.getItem('accessToken') ?? undefined;
  const refreshToken = localStorage.getItem('refreshToken') ?? undefined;
  const isFormData = body instanceof FormData;

  const createRequestOptions = (token?: string): RequestInit => ({
    method: method,
    headers: getHeaders(isFormData, token),
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  try {
    let options = createRequestOptions(accessToken);
    let response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (response.status === 401 && refreshToken) {
      const newAccessToken = await refreshAccessToken(refreshToken);
      options = createRequestOptions(newAccessToken);
      response = await fetch(`${BASE_URL}${endpoint}`, options);
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch data');
    }

    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
