import React from "react";

const Input = ({value, placeholder}) => {
  return (
    <>
      <fieldset className="flex flex-col gap-y-2">
        <p className="text-sm font-semibold">{value}</p>
        <input
          type="text"
          className="w-full py-3 px-4 border-2 border-[#E2E8F0] rounded-xl text-sm focus:outline-[#7237D7]"
          placeholder={placeholder || value}
        />
      </fieldset>
    </>
  );
};

export default Input;
