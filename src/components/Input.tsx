"use client";

import { IconOpenEyes } from "@/assets";
import React, { useState } from "react";

type InputProps = {
  leftIcon?: React.ReactNode;
  helperText?: string;
  label: string;
  showPasswordToggle?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<InputProps> = ({
  leftIcon,
  helperText,
  showPasswordToggle = false,
  label,
  type = "text", // Default type is text, but can be overridden
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="group">
      <p className="text-natural05 text-[10px] uppercase font-normal mt-[32px] mb-[10px] group-hover:text-natural03">
        {label}
      </p>
      <div className="relative flex items-center pl-10 w-full h-[40px] bg-natural75 border border-natural07 rounded-lg group-hover:border-primaryPurple">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {leftIcon}
        </span>
        <input
          className={`h-full w-full rounded-lg px-2 bg-natural75 text-natural03 focus-visible:outline-none placeholder:text-natural05 placeholder:text-[14px] placholder:font-normal ${
            showPasswordToggle && "mr-9"
          }`}
          {...props}
          type={isPasswordVisible ? "text" : type}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? "🙈" : <IconOpenEyes />}
          </button>
        )}
      </div>
      {helperText && (
        <p className="text-[10px] text-natural06 ml-1 font-normal mt-1 uppercase">
          {helperText}
        </p>
      )}
    </div>
  );
};
