import clsx from "clsx";
import React from "react";
//assets
import LogoBase from "../assets/svgs/Logo/LogoBase";
import LogoLarge from "../assets/svgs/Logo/LogoLarge";

const Logo = ({ className, size = "base", ...props }) => {
  const logoClass = clsx("logo", className);
  
  return size === "base" ? (
    <LogoBase className={logoClass} {...props} />
  ) : size === "large" ? (
    <LogoLarge className={logoClass} {...props} />
  ) : (
    ""
  );
};

export default Logo;
