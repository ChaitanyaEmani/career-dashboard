import React from "react";

interface DataPairProps {
  val1: number;
  val2: number;
  val3: number;
  val4: number;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  category: "portfolio" | string;
}

const DataPairCard: React.FC<DataPairProps> = ({
  val1,
  val2,
  val3,
  val4,
  text1,
  text2,
  text3,
  text4,
  category
}) => {
  return (
    <div className={`grid grid-cols-2 ${category === "portfolio" ? "lg:grid-cols-2": "lg:grid-cols-4 md:grid-cols-2"}  text-center gap-4 mb-4`}>
      <div>
        <span className="text-blue-700 text-3xl font-bold">{val1}</span>
        <p className="text-gray-500 text-sm">{text1}</p>
      </div>
      <div>
        <span className="text-green-700 text-3xl font-bold">{val2}</span>
        <p className="text-gray-500 text-sm">{text2}</p>
      </div>
      <div>
        <span className="text-purple-700 text-3xl font-bold">{val3}</span>
        <p className="text-gray-500 text-sm">{text3}</p>
      </div>
      <div>
        <span className="text-orange-700 text-3xl font-bold">{val4}</span>
        <p className="text-gray-500 text-sm">{text4}</p>
      </div>
    </div>
  );
};


export default DataPairCard