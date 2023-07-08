import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className=" text-sm
      placeholder-gray-500
      pl-10
      pr-4
      rounded-2xl
      border border-gray-400
      w-full
      py-2
      focus:outline-none focus:border-blue-400"
    />
  );
}
