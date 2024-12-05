import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ title }) => {
  return (
    <div>
      <div className="flex justify-between p-4 bg-cyan-50  rounded-lg shadow-lg">
        <div>
          <h1 className="text-2xl font-medium ">{title}</h1>
          <p className="py-2 text-slate-500">0</p>
        </div>
        <FaArrowTrendUp className="text-green-500 size-10" />
      </div>
    </div>
  );
};

export default Card;
