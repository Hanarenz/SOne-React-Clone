import React from "react";
import bg_searchtype from "../../assets/images/SOne_index_bg_searchtype.jpg";
import btsearch from "../../assets/images/SOne_index_search.png";

export default function Search() {
  const fields = [
    { name: "หน้ายาง", label: "ความกว้าง (มม.)" },
    { name: "ซีรี่ย์", label: "อัตราส่วนความสูงแก้มยาง (%)" },
    { name: "กระทะล้อ", label: "เส้นผ่าศูนย์กลาง (นิ้ว)" },
  ];

  return (
    <div className="relative w-full">
      <h1 className="bg-orange-600 p-2 w-full text-white text-left text-md md:text-md lg:text-xl">
        ค้นหายาง
      </h1>
      <div className="relative">
        <img src={bg_searchtype} alt="ค้นหา" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white w-[65%] max-w-xs md:max-w-sm lg:max-w-md p-2">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1 mb-1 ml-auto">
              <p className="text-sm md:text-base font-medium ">{field.name}</p>
              <p className="text-xs/6 md:text-xs ">{field.label}</p>
              <select className="hover:cursor-pointer border border-orange-600 p-1 bg-white text-black w-full ml-auto sm:h-1/3 md:max-h-1/2 sm:text-xs  md:text-sm lg:text-md">
                <option value="">-- เลือก{field.name} --</option>
              </select>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <img src={btsearch} alt="ค้นหา" className="w-16 md:w-20 lg:w-24 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
