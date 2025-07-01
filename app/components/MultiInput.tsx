import React,{useState} from "react";

import { Calendar } from "lucide-react";

interface InputCardProps {
    title: string;
    placeholderName: string;
}

export const InputCard: React.FC<InputCardProps> =({title, placeholderName})=>{
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">{title}</p>
            <input type="text" className="p-3 text-gray-500 text-md" placeholder={placeholderName} />
        </div>
    )
}

interface DateCardProps {
    title: string;
    
}

export const DateCard: React.FC<DateCardProps> = ({title})=>{
    return (
        <div className="flex flex-col gap-3">
            <p>{title}</p>
            <div className="border-1 bg-white rounded-lg p-3">
                <p className="text-sm font-semibold">dd-mm-yyyy</p>
                <Calendar size={20} className="font=bold"/>
            </div>
        </div>
    )
}


interface DescCardProps {
  title: string;
  desc: string;
}

export const DescCard: React.FC<DescCardProps> = ({ title, desc }) => {
  const [value, setValue] = useState("");

  return (
    <div className="p-4 border rounded-md bg-white w-full">
      <p className="mb-2 font-semibold text-gray-800">{title}</p>
      <textarea
        placeholder={desc}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={1}            // start with 1 line
        maxLength={1000}    // optional: limit characters
        className="resize-none w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
        style={{
          minHeight: "2.5rem",         // ~1 line
          maxHeight: "10.5rem",        // ~5 lines
          overflowY: "auto",
        }}
      />
    </div>
  );
};


interface ButtonProps{
  text: string;
}
// Buttons.tsx
export const Button: React.FC<ButtonProps> = ({ text }) => {
  const isCancel = text.toLowerCase() === "cancel";

  return (
    <button
      
      className={`px-4 py-2 rounded-md ${
        isCancel
          ? "bg-white text-black border border-gray-300"
          : "bg-green-800 text-white"
      }`}
    >
      {text}
    </button>
  );
};

