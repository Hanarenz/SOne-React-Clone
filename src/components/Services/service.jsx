import React from "react";
import btsearch from "../../assets/images/SOne_index_search.png";

export default function Service() {
  const fields = ["จังหวัด", "เขต/อำเภอ", "ถนน"];

  return (
    <div>
      <h1 className="bg-orange-600 text-white p-2 text-left text-md md:text-md lg:text-xl">
        ค้นหาศูนย์บริการใกล้บ้านคุณ
      </h1>
      <div className="bg-[#252525] text-white p-2 h-100%">
        {fields.map((label, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 mb-2"
          >
            <p className="w-24 text-right">{label}</p>
            <select className="hover:cursor-pointer border border-orange-600 p-1 bg-white text-black w-48">
              <option value="">-- เลือก{label} --</option>
            </select>
          </div>
        ))}
        <p className="text-orange-600 text-sm text-center mt-2">
          หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
        </p>
        <div className="grid grid-cols-3 gap-2 auto-rows-fr mt-2">
          <div className="col-span-1 flex h-full"></div>
          <div className="col-span-2 flex justify-center h-full">
            <img src={btsearch} alt="" className="hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
