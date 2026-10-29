import { tw } from "@/lib/utils/ui/tw";
import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'md' | 'lg';

const BUTTON_SIZES: Record<ButtonSize, string> = {
  'md': tw('h-8 w-32 text-sm'),
  'lg': tw('h-10 w-40 text-base'),
};

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  'primary': tw('bg-blue-500 text-white '),
  'secondary': tw('bg-gray-200'),
  'outline': tw('border-2 border-black'),
};

interface Props {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize
}

export const Button = ({ children, variant = 'primary', size = 'md' }: Props) => {
  const buttonSize = BUTTON_SIZES[size];
  const buttonVariant = BUTTON_STYLES[variant];

  return (
    <button className={`rounded-md ${buttonSize} ${buttonVariant}`}>{children}</button>
  )
}