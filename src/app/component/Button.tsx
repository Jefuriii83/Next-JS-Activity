import React, { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
};

export const Button = ({ name, className, children, ...props }: ButtonProps) => {
  return (
    <button 
    {...props}
    className={`border rounded-md py-3 px-9 border-black font-medium ${className}`}>
      {children}
    </button>
  );
};
