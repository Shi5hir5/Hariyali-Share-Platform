import React from "react";
import Hariyali from "./Hariyali";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoQrCode } from "react-icons/io5";



const Application = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
  };

  const [showImage, setShowImage] = useState(false); 

  const handleShowImage = () => {
    setShowImage(true); 
  };

  const handleCloseImage = () => {
    setShowImage(false); 
  };

  return (
    <div>
      <Hariyali />
      <div className=" md:w-[78vw] w-[100vw]  px-5 mb-2  md:mt-32   mt-24 ml-0 md:ml-[21%]">


       
        <div className="h-auto border-2 border-gray-400 rounded-lg relative ">
          <h1 className="bg-green-600 text-white inline-block p-2 rounded-lg absolute top-[-13px] left-10">
            Share Application
          </h1>
          <div className="flex gap-2 justify-end mt-10 mr-5">
            <form onSubmit={handleSubmit} className="flex gap-2 ">
              <label htmlFor="" className="flex flex-col text-xl">
                Share Certificate Number
                <input
                  type="text"
                  name="certificateNumber"
                  placeholder="certificate number"
                  className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400"
                />
              </label>
              <label htmlFor="" className="flex flex-col text-xl">
                Contact Number
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="contact number"
                  className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400"
                />
              </label>
            </form>
            <button
              type="submit"
              className="bg-green-600 text-white font-medium px-2  rounded-lg"
            >
              Fill info
            </button>
          </div>
          <div className="border-2 border-gray-400 h-auto m-14 rounded-lg p-5 relative">
            <h1
              className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[-18px]
            left-10"
            >
              व्यक्तिगत विवरण
            </h1>
            <div className="mt-3">
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 ">
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    नाम <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    {" "}
                    व्यक्तिगत फोटो <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="file"
                    name="contactNumber"
                    placeholder="contact number"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    इमेल <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="इमेल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    फोन नम्बर <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="फोन नम्बर "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    जन्म मिति <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="date"
                    name="contactNumber"
                    placeholder="contact number"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                  <p className="text-red-600 text-[18px]">
                    Applicant Under age of 18 is not eligible to buy hariyali
                    share.
                  </p>
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    {" "}
                    हजुरबुबाको नाम <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="हजुरबुबाको नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    बुबाको नाम <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="बुबाको नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    आमाको नाम <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="आमाको नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  श्रीमान / श्रीमती
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="श्रीमान / श्रीमती"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form>
            </div>
            <div className="border-2 border-gray-400 h-auto mt-10 mx-3  rounded-lg p-5">
              <h1
                className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[50%]
            "
              >
                नागरिकता विवरण
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex justify-evenly flex-wrap mt-2 "
              >
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    नागरिकता नं. <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" नागरिकता नं. "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    नागरिकता नं. राष्ट्रिय परिचय पत्र नं.
                    <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" राष्ट्रिय परिचय पत्र नं. "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    नागरिकता फोटो <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="file"
                    name="certificateNumber"
                    placeholder=" नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form>
            </div>
            <div className="flex gap-8  justify-evenly mt-10 mx-3">
              <div className="border-2 border-gray-400 rounded-lg p-5">
              <h1
                className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[65%]
            ">अस्थायी ठेगाना</h1>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 mt-2 "
              >
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  प्रदेश <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    placeholder=" प्रदेश"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  जिल्ला 
                    <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" जिल्ला "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  पालिका <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" पालिका "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  वार्ड नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" वार्ड नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  टोल <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" टोल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  घर नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" घर नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form>
              <p className="inline-block mt-3 text-xl">एउटै ठेगाना ..?<input type="checkbox" name="" id="" className="mx-3 size-5" /></p>

              </div>
              <div className="border-2 border-gray-400 rounded-lg p-5"> 
              <h1
                className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[65%]
            ">स्थाई ठेगाना</h1>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 mt-2 "
              >
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  प्रदेश <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    placeholder=" प्रदेश"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  जिल्ला 
                    <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" जिल्ला "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  पालिका <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" पालिका "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  वार्ड नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" वार्ड नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  टोल <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" टोल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  घर नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" घर नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form></div>
            </div>
          </div>
          <div className="border-2 border-gray-400 h-auto mt-10 m-12  rounded-lg p-5">
            <div >
            <h1
              className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[58.2%]
            left-16"
            >
              हकवालाको बिवरण
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5 ">
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    नाम <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" नाम "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    {" "}
                    फोन नम्बर <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="फोन नम्बर"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    इमेल 
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="इमेल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  नाता <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="नाता "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  नागरिकता नं.<span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="number"
                    name="contactNumber"
                    placeholder="नागरिकता नं."
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                  
                </label>
               
              </form>
            </div>
            <div className="flex gap-8  justify-evenly mt-10 mx-3">
              <div className="border-2 border-gray-400 rounded-lg p-5">
              <h1
                className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[68.8%]
            ">अस्थायी ठेगाना</h1>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 mt-2 "
              >
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  प्रदेश <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    placeholder=" प्रदेश"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  जिल्ला 
                    <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" जिल्ला "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  पालिका <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" पालिका "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  वार्ड नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" वार्ड नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  टोल <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" टोल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  घर नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" घर नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form>
              <p className="inline-block mt-3 text-xl">एउटै ठेगाना ..?<input type="checkbox" name="" id="" className="mx-3 size-5" /></p>

              </div>
              <div className="border-2 border-gray-400 rounded-lg p-5"> 
              <h1
                className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[68.8%]
            ">स्थाई ठेगाना</h1>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 mt-2 "
              >
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  प्रदेश <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    placeholder=" प्रदेश"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  जिल्ला 
                    <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" जिल्ला "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  पालिका <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" पालिका "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  वार्ड नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" वार्ड नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  टोल <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" टोल "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  घर नं <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="certificateNumber"
                    placeholder=" घर नं "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
              </form></div>
            </div>
          </div>
          <div className="border-2 border-gray-400 m-12 p-5 rounded-lg " >
            <h1 className="bg-green-600 text-white inline-block p-2 px-3 rounded-lg absolute top-[87.4%] left-20" >शेयर बिवरण
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5 ">
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  शेयर मात्रा <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="number"
                    name="certificateNumber"
                    placeholder=" 0 "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                    {" "}
                    शेयर दर <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="bumber"
                    name="contactNumber"
                    placeholder="0"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  शेयर कुल रकम 
                  </p>
                  <input
                    type="number"
                    name="contactNumber"
                    placeholder="0"
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                <label htmlFor="" className="flex flex-col text-xl">
                  <p>
                  Voucher <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="file"
                    name="contactNumber"
                    placeholder=" "
                    className="border py-2 px-2 rounded-md outline-blue-500 hover:outline-blue-400 mt-3 "
                  />
                </label>
                
                  
                
                 <div className="relative  flex justify-center items-center">
      <button
        onClick={handleShowImage}
        className="px-4 py-3 bg-green-600 text-white flex items-center gap-2 font-medium rounded-lg hover:bg-green-700 focus:outline-none"
      >
        <IoQrCode />
        Show QR
      </button>

      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex gap-10 justify-center items-center z-50 "
          // Close when overlay is clicked
        >
          <img
            src="src/assets/logo/QR.png"  
            alt="Example"
            />
          <RxCross2 onClick={handleCloseImage}  className="bg-red-600 text-white size-10 rounded-full absolute top-[18%] right-[37%] cursor-pointer"/>
        </div>
      )}
    </div>
               
              </form>
            </div>
        </div>
      </div>
    </div>
  );

};



export default Application;
