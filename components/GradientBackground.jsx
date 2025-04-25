import React from "react";

const GradientBackground = ({ children }) => {
  return (
    <>
      <div className="w-full py-14 bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF]">
        {children}
      </div>
    </>
  );
};

export default GradientBackground;
