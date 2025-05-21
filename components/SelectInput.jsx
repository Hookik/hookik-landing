import React from "react";
import { Controller } from "react-hook-form";

const SelectInput = ({ name, label, control, rules, options = [] }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <select
              {...field}
              className={`w-full py-3 px-4 border-2 rounded-full text-sm focus:outline-[#7237D7] ${
                error ? "border-red-500" : "border-[#E2E8F0]"
              }`}
            >
              <option value="">Select Category</option>
              {options.map((opt, index) => (
                <option key={index} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
            {error && (
              <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;
