import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: Props) => {
  return <div className={`mx-auto w-full max-w-7xl px-4 ${className}`}>{children}</div>;
};
