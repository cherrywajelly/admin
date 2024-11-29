export const getEnv = (key: string): string => {
  return import.meta.env[key] || 'UNDEFINED_ENV';
};
