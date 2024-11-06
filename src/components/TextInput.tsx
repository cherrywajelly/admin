import { ReactNode } from 'react';
import { TextInputProps } from '../types/Props';

const TextInput = (props: TextInputProps): ReactNode => {
  const { text, value, onChange, required = false, textStyles, inputStyles } = props;

  return (
    <div className="flex flex-col space-y-1">
      <label className={textStyles}>{text}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`border border-gray-300 p-2 rounded-lg w-full ${inputStyles}`}
        required={required}
      />
    </div>
  );
};

export default TextInput;
