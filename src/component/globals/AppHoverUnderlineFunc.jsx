import React from "react";
import { Link } from "react-router-dom";

const AppHoverUnderlineFunc = ({title, size}) => {
  return (
    <Link
      to="/"
      className="flex lg:items-center lg:mx-auto text-[#e33874] font-semibold opacity-90 hover:opacity-100"
    >
      <span className={`read-more-link text-${size} text-[#e33874] font-semibold opacity-90 hover:opacity-100`}>
        {title}
      </span>
    </Link>
  );
};

export default AppHoverUnderlineFunc;
