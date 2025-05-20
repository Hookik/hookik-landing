import React from "react";
import { Controller } from "react-hook-form";

const Input = ({ name, control, rules, placeholder, label }) => {
  return (
    <fieldset className="flex flex-col gap-y-2">
      {label && <p className="text-sm font-semibold">{label}</p>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type="text"
              className={`w-full py-3 px-4 border-2 rounded-xl text-sm focus:outline-[#7237D7] ${
                error ? "border-red-500" : "border-[#E2E8F0]"
              }`}
              placeholder={placeholder || label || name}
            />
            {error && (
              <span className="text-xs text-red-500">{error.message}</span>
            )}
          </>
        )}
      />
    </fieldset>
  );
};

export default Input;
