import React from "react";
import Search from "../../components/Search/search";
import Banner from "../../components/Banner/banner";
import Menu from "../../components/Menu/menu";
import Service from "../../components/Services/service";
import NewEvent from "../../components/NewsEvents/newEvent";
import Tip from "../../components/Tips/tip";

export default function Promotions() {
  return (
    <div className="space-y-4 mt-2 p-2">
      {/* Banner (ยืดเต็มจอในจอเล็ก) */}
      <div className="w-full lg:col-span-3 flex justify-center">
        <Banner />
      </div>
    </div>
  );
}
