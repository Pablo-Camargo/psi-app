import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}
export function Label({ text, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className="block  leading-6 text-gray-800 mb-2 font-semibold"
    >
      {text}
    </label>
  );
}
