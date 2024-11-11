import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around">
      <div className="">
        <p className="justify-center items-center font-bold text-xl text-[#A3AED0]">
          © 2023 Spark Drive. All Rights Reserved.{" "}
        </p>
      </div>
      <div className="flex gap-x-3 font-bold text-xs   text-[#A3AED0] ">
        <p>license</p>
        <p>terms of use</p>
        <p>blog</p>
      </div>
    </div>
  );
};

export default Footer;
