import React, { useState } from "react";
import news_pic3 from "../../assets/images/SOne_index_news_pic3.png";
import bullet1 from "../../assets/images/SOne_index_bullet1.png";
import bullet2 from "../../assets/images/SOne_index_bullet2.png";

export default function NewEvent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsList = [
    { date: "19 NOV 2014", text: "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม" },
    { date: "20 NOV 2014", text: "ข่าวสารล่าสุด อัปเดตทุกวัน" },
    { date: "21 NOV 2014", text: "กิจกรรมพิเศษสำหรับสมาชิกเท่านั้น!!" },
    { date: "22 NOV 2014", text: "โปรโมชั่นสุดคุ้มสำหรับคุณ" },
    { date: "23 NOV 2014", text: "อัปเดตเทคโนโลยียานยนต์" },
    { date: "24 NOV 2014", text: "เช็ครถก่อนเดินทางไกล" },
    { date: "25 NOV 2014", text: "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม" },
    { date: "26 NOV 2014", text: "อัปเดตเทคโนโลยียานยนต์" },
    { date: "27 NOV 2014", text: "กิจกรรมพิเศษสำหรับสมาชิกเท่านั้น!!" },
  ];

  const itemsPerPage = 3; // จำนวนข่าวที่แสดงต่อแถว
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const goToIndex = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="ml-2 w-full">
      {/* หัวข้อและปุ่ม Bullet */}
      <h1 className="flex justify-between p-1 border border-orange-600 w-full">
        New & Events
        <div className="flex justify-center gap-2 mr-2 p-1">
          {[...Array(totalPages)].map((_, index) => (
            <img
              key={index}
              src={currentIndex === index ? bullet1 : bullet2}
              alt=""
              className="cursor-pointer"
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </h1>

      {/* ข่าวที่เลื่อนได้ */}
      <div className="overflow-hidden border border-orange-600 w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...Array(totalPages)].map((_, pageIndex) => (
            <div key={pageIndex} className="flex min-w-full gap-4 p-2">
              {newsList
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((news, index) => (
                  <div key={index} className="relative w-1/3">
                    <div className="absolute top-2 left-2 p-1 bg-black bg-opacity-50 text-white text-xs">
                      {news.date}
                    </div>
                    <img src={news_pic3} alt="ข่าว" className="w-full" />
                    <p className="break-words md:border-dotted hover:underline hover:cursor-pointer mt-2">
                      {news.text}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
