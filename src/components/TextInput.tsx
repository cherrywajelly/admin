import { ReactNode } from 'react';
import { TextInputProps } from '../types/Props';

const TextInput = (props: TextInputProps): ReactNode => {
  const { label, value, onChange, textStyles, inputStyles } = props;

  return (
    <div className="flex items-center space-x-2">
      <label className={`font-bold ${textStyles}`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`border border-gray-300 p-2 rounded-lg w-full ${inputStyles}`}
      />
    </div>
  );
};

export default TextInput;
