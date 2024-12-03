import { ReactNode } from 'react';
import { TextInputProps } from '../types/Props';

const TextInput = (props: TextInputProps): ReactNode => {
  const { label, value, onChange, textStyles, inputStyles } = props;

  return (
    <div className="flex flex-row items-center w-full">
      <label className={`font-bold ${textStyles}`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`border border-gray-300 p-2 rounded-lg ${inputStyles}`}
      />
    </div>
  );
};

export default TextInput;
