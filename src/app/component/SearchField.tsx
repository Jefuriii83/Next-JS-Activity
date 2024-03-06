import React, { ReactNode } from "react";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
};

export const SearchField = ({ name, className, children, ...props }: SearchProps) => {
  return (
    <div className="searchContainer flex justify-center">
        <input type='text' 
        {...props}
        className={`border rounded-full py-3 px-9 border-black font-medium w-96 ${className}`}>
        {children}
        </input>
{/* 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 bg-black text-white rounded-full p-1 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg> */}
    </div>
  );
};
