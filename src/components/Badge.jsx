import React from "react";

function Badge({ text }) {
  return (
    <span class="px-2 py-[1px] ml-[2px] my-[2px] text-xs capitalize rounded-full text-red-600 border border-red-600 bg-red-200 ">
      {text}
    </span>
  );
}

export default Badge;
