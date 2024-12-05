import React from "react";
import Card from "./Card";
import Hariyali from "./Hariyali";

const MainArea = () => {
  const cardInfo = [
    {
      title: "Share Amount",
      img: "",
    },
    {
      title: "Share Quantity",
      img: "",
    },
    {
      title: "Total Share Request",
      img: "",
    },
    {
      title: "Pending Request",
      img: "",
    },
    {
      title: "Pending Request",
      img: "",
    },
    {
      title: "Declined Request",
      img: "",
    },
  ];
  return (
    <div>
      <Hariyali/>
      <div className="grid md:grid-cols-3 md:w-[78vw] w-[100vw] gap-4 px-5 items-center md:mt-24   mt-24 ml-0 md:ml-[22%]">
        {cardInfo.map((data, index) => {
          return <Card title={data.title} key={index} />;
        })}
      </div>
      <div className="grid md:grid-cols-2 md:w-[40vw] w-[95vw] gap-4 px-5 items-center md:mt-12  mt-10 ml-2 md:ml-[23%] mb-5 border py-4 rounded-lg shadow-md">
        <h1 className="text-green-800 font-semibold text-xl">Approve Request</h1>
      </div>
    </div>
  );
};

export default MainArea;
