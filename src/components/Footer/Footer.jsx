import React from "react";
import SOne_index_logos from "../../assets/images/SOne_index_logos.png";

export default function Footer() {
  return (
    <div className="flex items-center justify-between mt-2">
      <img src={SOne_index_logos} alt="" className="h-auto w-auto" />
      <div className="bg-black rounded-sm text-white text-xs w-full p-2">	
      Copyright © 2014</div>
    </div>
  );
}
