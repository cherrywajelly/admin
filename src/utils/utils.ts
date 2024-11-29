export const getEnv = (key: string): string => {
  return import.meta.env[key] || 'UNDEFINED_ENV';
};

export const isAllFieldsFilled = (fields: any[]): boolean => {
  return fields.every((field) => !!field);
};
