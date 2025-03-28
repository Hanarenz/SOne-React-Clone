import React, { useState } from "react";
import SOne_index_bt_tire from "../../assets/images/SOne_index_bt-tire.jpg";
import SOne_index_bt_tire1 from "../../assets/images/SOne_index_bt-tire1.jpg";
import SOne_index_bt_break from "../../assets/images/SOne_index_bt-break.jpg";
import SOne_index_bt_break1 from "../../assets/images/SOne_index_bt-break1.jpg";
import SOne_index_bt_battery from "../../assets/images/SOne_index_bt-battery.jpg";
import SOne_index_bt_battery1 from "../../assets/images/SOne_index_bt-battery1.jpg";
import SOne_index_bt_chokeup from "../../assets/images/SOne_index_bt-chokeup.jpg";
import SOne_index_bt_chokeup1 from "../../assets/images/SOne_index_bt-chokeup1.jpg";
import SOne_index_bt_oil from "../../assets/images/SOne_index_bt-oil.jpg";
import SOne_index_bt_oil1 from "../../assets/images/SOne_index_bt-oil1.jpg";
import SOne_index_bt_guarantee from "../../assets/images/SOne_index_bt-guarantee.jpg";
import SOne_index_bt_guarantee1 from "../../assets/images/SOne_index_bt-guarantee1.jpg";

export default function Menu() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);
  
  const images = [
    { default: SOne_index_bt_tire, hover: SOne_index_bt_tire1 },
    { default: SOne_index_bt_break, hover: SOne_index_bt_break1 },
    { default: SOne_index_bt_battery, hover: SOne_index_bt_battery1 },
    { default: SOne_index_bt_chokeup, hover: SOne_index_bt_chokeup1 },
    { default: SOne_index_bt_oil, hover: SOne_index_bt_oil1 },
    { default: SOne_index_bt_guarantee, hover: SOne_index_bt_guarantee1 },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={hoveredImage === index ? image.hover : image.default}
          alt={`image-${index}`}
          className="w-full sm:max-w-full md:max-w-full lg:max-w-full h-auto cursor-pointer transition-transform transform hover:scale-105"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}
