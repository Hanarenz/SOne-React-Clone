import React from "react";
import SOne_index_tips1 from "../../assets/images/SOne_index_tips1.png";
import pic66 from "../../assets/images/SOne_index_pic66.png";
import pic99 from "../../assets/images/SOne_index_pic99.png";
import call from "../../assets/images/SOne_index_call.png";

export default function Tip() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src={SOne_index_tips1} alt="" className="w-auto" />
          <div className=" bg-[#252525] p-1 w-auto">
            <p className="flex items-center justify-center text-orange-600">
              Safety Tips
            </p>
            <img src={pic66} alt="" className="  bg-[#252525]" />
            <p className="text-center text-sm text-white">
              ควรเติมน้ำมันตอนเช้า ขณะที่อุณหภูมิบนพื้น ดินยังเย็นอยู่
            </p>
            <img src={pic99} alt="" className="block ml-auto bg-[#252525]" />
          </div>
        </div>
        <div className="flex items-center justify-around mt-2">
          <p className="text-sm">สมัครรับข่าวสาร</p>
          <div className="flex ">
            <input
              type="text"
              placeholder="กรุณาใส่อีเมล์"
              className="text-sm ml-1 border-orange-600 border-1 h-5"
            />
            <div className="flex items-center bg-black text-white p-1 text-sm h-5 hover:cursor-pointer">
              Go
            </div>
          </div>
        </div>
        <div className="mt-2 border-b-1 border-dashed border-orange-600"></div>
        <div className="flex justify-center items-center h-full mt-5">
          <img src={call} alt="" />
        </div>
      </div>
    </div>
  );
}
