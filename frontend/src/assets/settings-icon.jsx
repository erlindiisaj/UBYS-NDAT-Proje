import React from "react";
import { useTheme } from "@mui/material/styles";

function SettingsIcon({ selected }) {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill={selected ? theme.palette.primary.main : "#919EAB"}
        fillOpacity="0.5"
        fillRule="evenodd"
        d="M17.849 2.69c-.463-.19-1.05-.19-2.224-.19-1.174 0-1.76 0-2.224.19a2.51 2.51 0 00-1.362 1.354c-.118.279-.163.605-.182 1.079a2.018 2.018 0 01-.995 1.69 2.05 2.05 0 01-1.973.01c-.423-.222-.73-.344-1.032-.384a2.532 2.532 0 00-1.862.495c-.398.302-.691.807-1.278 1.816-.587 1.009-.88 1.512-.946 2.006a2.484 2.484 0 00.5 1.849c.185.24.446.441.85.694.596.371.979 1.004.979 1.701 0 .697-.383 1.33-.978 1.7-.405.254-.666.455-.852.695a2.487 2.487 0 00-.499 1.849c.066.492.359.997.946 2.006.588 1.009.88 1.512 1.278 1.816.53.404 1.2.582 1.862.495.303-.04.61-.162 1.032-.385a2.05 2.05 0 011.975.01c.607.35.967.994.993 1.692.02.474.064.8.182 1.078.255.613.745 1.1 1.362 1.354.463.19 1.05.19 2.224.19 1.174 0 1.761 0 2.224-.19a2.51 2.51 0 001.362-1.354c.118-.279.163-.604.181-1.078.025-.698.387-1.343.995-1.692a2.05 2.05 0 011.974-.01c.423.223.729.345 1.031.385a2.528 2.528 0 001.863-.495c.397-.302.691-.807 1.277-1.816.588-1.009.88-1.512.947-2.006a2.49 2.49 0 00-.5-1.849c-.185-.24-.447-.441-.85-.694-.597-.371-.98-1.004-.98-1.701 0-.697.383-1.33.978-1.7.405-.254.667-.455.853-.695a2.486 2.486 0 00.499-1.849c-.067-.492-.36-.997-.947-2.006s-.88-1.513-1.277-1.816a2.532 2.532 0 00-1.863-.495c-.302.04-.608.162-1.03.385a2.05 2.05 0 01-1.976-.01 2.018 2.018 0 01-.994-1.692c-.018-.474-.063-.8-.18-1.078a2.51 2.51 0 00-1.363-1.354z"
        clipRule="evenodd"
        opacity="0.5"
      ></path>
      <path
        fill={selected ? theme.palette.primary.main : "#919EAB"}
        d="M19.404 15c0 2.071-1.693 3.75-3.78 3.75-2.087 0-3.778-1.679-3.778-3.75 0-2.071 1.691-3.75 3.779-3.75 2.087 0 3.779 1.679 3.779 3.75z"
      ></path>
    </svg>
  );
}

export default SettingsIcon;
