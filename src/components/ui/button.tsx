import React from "react";
import clsx from "clsx";

const sizeClasses = {
  sm: "text-sm py-1 px-2 border",
  md: "text-base py-2 px-4 border-2",
  lg: "text-lg py-3 px-6 border-3",
};

export const Button = ({ children, size = "md", ...props }) => {
  return (
    <button
      className={clsx(
        "text-black rounded-lg hover:cursor-pointer",
        sizeClasses[size],
      )}
      {...props}
    >
      {children}
    </button>
  );
};
