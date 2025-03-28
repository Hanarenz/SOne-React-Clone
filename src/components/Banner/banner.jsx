import React, { useState } from "react";
import SOne_Mobile_banner from "../../assets/images/SOne_index_banner.jpg";
import banner_promotion_01 from "../../assets/images/banner_promotion_01.jpg";
import under_construction from "../../assets/images/SOne_index_under-construction.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerList = [
    { item: "banner01", banner: SOne_Mobile_banner },
    { item: "banner02", banner: banner_promotion_01 },
    { item: "banner03", banner: under_construction },
  ];

  const totalBanners = bannerList.length;

  const goToIndex = (index) => {
    if (index >= 0 && index < totalBanners) {
      setCurrentIndex(index);
    }
  };

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBanners);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalBanners - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-full">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={bannerList[currentIndex].banner}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-auto object-cover transition-opacity duration-500"
        />

        {/* Arrow Navigation */}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 w-1/3 flex flex-col items-center gap-2 drop-shadow-lg">
          <FontAwesomeIcon
            icon={faChevronUp}
            size="3x"
            className="p-2 cursor-pointer w-8 md:w-10 lg:w-12 text-white duration-500  hover:text-orange-600"
            onClick={prevBanner}
          />
          {bannerList.map((banner, index) => (
            <img
              key={index}
              src={banner.banner}
              alt={`Thumbnail ${index + 1}`}
              className={`border w-1/3 md:w-1/3 lg:w-1/2  cursor-pointer ${
                currentIndex === index
                  ? "border-orange-600"
                  : "border-white grayscale "
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
          <FontAwesomeIcon
            icon={faChevronDown}
            size="3x"
            className="p-2 cursor-pointer w-8 md:w-10 lg:w-12 text-white duration-500 hover:text-orange-600 "
            onClick={nextBanner}
          />
        </div>
      </div>
    </div>
  );
}
