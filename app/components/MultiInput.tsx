import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface InputCardProps {
  type: string;
  title:string;
  placeholderName: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCard: React.FC<InputCardProps> = ({
  type,
  placeholderName,
  name,
  value,
  onChange,
  title
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="p-1.5 border text-xs border-gray-300 rounded-md w-full min-w-[180px]"
        placeholder={placeholderName}
        required
      />
    </div>
  );
};

interface DateCardProps {
  placeholderName: string;
  name: string;
  value: string;
  title:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateCard: React.FC<DateCardProps> = ({
  name,
  value,
  onChange,
  placeholderName,
  title
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-1.5 text-xs border border-gray-300 rounded-md min-w-[180px]"
        placeholder={placeholderName}
        required
      />
    </div>
  );
};

interface DescCardProps {
  title:string;
  placeholderName: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DescCard: React.FC<DescCardProps> = ({
  name,
  value,
  onChange,
  placeholderName,
  title
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {title}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full text-xs p-1.5 border border-gray-300 rounded-md"
        placeholder={placeholderName}

        required
      />
    </div>
  );
};

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  const isCancel = text.toLowerCase() === "cancel";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 w-full min-w-[180px] py-2 rounded-md ${
        isCancel
          ? "bg-white text-black border border-gray-300"
          : "bg-green-800 text-white"
      }`}
    >
     {text}
    </button>
  );
};
