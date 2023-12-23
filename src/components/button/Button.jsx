import React from "react";

const Button = ({ text, fill, outlined, lg, md, sm }) => {
  return (
    <button
      className={`btn ${
        fill &&
        "bg-primary text-[#FFF] hover:text-primary hover:bg-[#FFF] hover:shadow-primary hover:shadow-[inset_0_0_0px_2px]"
      } ${
        outlined &&
        "bg-white shadow-primary shadow-[inset_0_0_0px_2px] text-primary hover:bg-primary hover:text-[#FFF]"
      } rounded-full font-bold ${
        lg && "px-[20px] py-[10px] text-base lg:px-[40px] lg:py-[18px]"
      } ${md && "px-[30.4px] py-[15.2px]"} ${
        sm && "px-[20px] py-[10px]"
      }  whitespace-nowrap transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
