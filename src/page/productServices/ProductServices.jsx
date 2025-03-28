import React from "react";
import Search from "../../components/Search/search";
import Banner from "../../components/Banner/banner";
import Menu from "../../components/Menu/menu";
import Service from "../../components/Services/service";
import NewEvent from "../../components/NewsEvents/newEvent";
import Tip from "../../components/Tips/tip";

export default function ProductServices() {
  return (
    <div className="space-y-4 mt-2 p-2">
      {/* Section 1: Search & Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
        {/* Search (Responsive - อยู่บนสุดในจอเล็ก) */}
        <div className="w-full lg:col-span-1 flex justify-center">
          <Search />
        </div>
        {/* Banner (ยืดเต็มจอในจอเล็ก) */}
        <div className="w-full lg:col-span-3 flex justify-center">
          <Banner />
        </div>
      </div>

      {/* Menu */}
      <Menu />

      {/* Section 2: Services, News & Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-gray-100 p-2 flex flex-col">
          <Service />
        </div>
        <div className="sm:col-span-1 lg:col-span-2 bg-gray-100 p-2 flex flex-col">
          <NewEvent />
        </div>
        <div className="bg-gray-100 p-2 flex flex-col">
          <Tip />
        </div>
      </div>
    </div>
  );
}
