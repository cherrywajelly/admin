type ButtonProps = {
  styles?: string;
  icon?: string;
  text: string;
  onClick?: () => void;
  isClicked?: boolean;
};

type TextInputProps = {
  text: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  textStyles?: string;
  inputStyles?: string;
};

export type { ButtonProps, TextInputProps };
