import React from "react";

const MultiLineInput = ({ value, placeholder }) => {
  return (
    <>
      <fieldset className="flex flex-col gap-y-2">
        <p className="text-sm font-semibold">{value}</p>
        <textarea
          type="text"
          className="w-full py-3 px-4 border-2 h-28 border-[#E2E8F0] rounded-xl text-sm focus:outline-[#7237D7]"
          placeholder={placeholder || value}
        />
      </fieldset>
    </>
  );
};

export default MultiLineInput;
