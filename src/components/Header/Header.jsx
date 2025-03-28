import React, { useState } from "react";
import { BiSearch, BiMenu, BiX } from "react-icons/bi"; // Import ไอคอนเมนู
import { useLocation, Link } from "react-router-dom";
import SOne_index_logo from "../../assets/images/SOne_index_logo.png";
import PSOne_index_iconthai from "../../assets/images/SOne_index_iconthai.jpg";
import PSOne_index_iconeng2 from "../../assets/images/SOne_index_iconeng2.jpg";
import Menu02 from "../../assets/images/SOne_index_menu02.png";
import Menu01 from "../../assets/images/SOne_index_menu01.png";
import btfacebook1 from "../../assets/images/SOne_index_btfacebook1.png";
import btfacebook from "../../assets/images/SOne_index_btfacebook.png";
import btyoutube from "../../assets/images/SOne_index_btyoutube.png";
import btyoutube1 from "../../assets/images/SOne_index_btyoutube1.png";
import bttwitter from "../../assets/images/SOne_index_bttwitter.png";
import bttwitter1 from "../../assets/images/SOne_index_bttwitter1.png";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ใช้เปิด/ปิดเมนู
  const location = useLocation(); 

  const icons = [
    { name: "facebook", default: btfacebook, hover: btfacebook1 },
    { name: "twitter", default: bttwitter, hover: bttwitter1 },
    { name: "youtube", default: btyoutube, hover: btyoutube1 },
  ];
  const menuItems = [
    { name: "Product & Services", path: "/" },
    { name: "Promotions", path: "/promotions" },
    { name: "News & Events", path: "/news" },
    { name: "Safety Tips", path: "/safety-tips" },
    { name: "FAQS", path: "/faqs" },
    { name: "Location", path: "/location" },
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between">
        <img src={SOne_index_logo} alt="Logo" className="h-12 md:h-16" />

        {/* Right Section */}
        <div className="hidden md:flex flex-col items-end">
          <div className="flex space-x-2">
            <img src={PSOne_index_iconthai} alt="TH" className="cursor-pointer w-auto h-6" />
            <img src={PSOne_index_iconeng2} alt="EN" className="cursor-pointer w-auto h-6" />
          </div>

          {/* Search */}
          <div className="flex items-center border border-orange-500 rounded-md overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-sm focus:outline-none"
            />
            <BiSearch className="p-2 text-white bg-gray-900 cursor-pointer w-8 h-8" />
          </div>

          {/* Links */}
          <nav>
            <ul className="flex gap-4 text-xs mt-2">
              <li className="hover:text-orange-500 cursor-pointer">About S-ONE</li> |
              <li className="hover:text-orange-500 cursor-pointer">Job Opportunity</li> |
              <li className="hover:text-orange-500 cursor-pointer">Contact Us</li> |
              <li className="hover:text-orange-500 cursor-pointer">Site Map</li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black rounded-sm flex justify-between items-center px-4 py-2">
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white text-sm">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index} className="relative">
                  <Link to={item.path} className={`flex items-center ${isActive ? "text-orange-500" : "hover:text-orange-500"}`}>
                    <img src={isActive || hoveredItem === index ? Menu02 : Menu01} className="w-5 h-5 mr-1" alt={item.name} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-2">
          {icons.map(({ name, default: defaultIcon, hover: hoverIcon }) => (
            <img
              key={name}
              src={hoveredItem === name ? hoverIcon : defaultIcon}
              onMouseEnter={() => setHoveredItem(name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-6 h-6 cursor-pointer"
              alt={name}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <nav>
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index} className="relative">
                    <Link to={item.path} className={`flex items-center ${isActive ? "text-orange-500" : "hover:text-orange-500"}`}>
                      <img src={isActive || hoveredItem === index ? Menu02 : Menu01} className="w-5 h-5 mr-1" alt={item.name} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
