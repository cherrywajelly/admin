import { ApprovalState } from '../types/Enums';

export const getEnv = (key: string): string => {
  return import.meta.env[key] || 'UNDEFINED_ENV';
};

export const isAllFieldsFilled = (fields: any[]): boolean => {
  return fields.every((field) => !!field);
};

export const fetchText = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return await response.text();
};

export const toApprovalState = (state: string): ApprovalState => {
  switch (state) {
    case 'WAITING':
      return ApprovalState.PENDING;
    case 'REGISTERED':
      return ApprovalState.APPROVED;
    case 'REJECTED':
      return ApprovalState.REJECTED;
    default:
      return ApprovalState.PENDING;
  }
};
