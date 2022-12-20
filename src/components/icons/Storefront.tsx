import React from "react";

const Storefront = ({ color = "white" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12.4502C6.55228 12.4502 7 12.8979 7 13.4502V26.0002H25V13.4502C25 12.8979 25.4477 12.4502 26 12.4502C26.5523 12.4502 27 12.8979 27 13.4502V26.0002C27 26.5306 26.7893 27.0393 26.4142 27.4144C26.0391 27.7895 25.5304 28.0002 25 28.0002H7C6.46957 28.0002 5.96086 27.7895 5.58579 27.4144C5.21071 27.0393 5 26.5306 5 26.0002V13.4502C5 12.8979 5.44772 12.4502 6 12.4502Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 4.44772 3.44772 4 4 4H28C28.5523 4 29 4.44772 29 5C29 5.55228 28.5523 6 28 6H4C3.44772 6 3 5.55228 3 5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4.55228 7 5 7.44772 5 8V10C5 10.7956 5.31607 11.5587 5.87868 12.1213C6.44129 12.6839 7.20435 13 8 13C8.79565 13 9.55871 12.6839 10.1213 12.1213C10.6839 11.5587 11 10.7956 11 10V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V10C13 11.3261 12.4732 12.5979 11.5355 13.5355C10.5979 14.4732 9.32608 15 8 15C6.67392 15 5.40215 14.4732 4.46447 13.5355C3.52678 12.5979 3 11.3261 3 10V8C3 7.44772 3.44772 7 4 7Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C12.5523 7 13 7.44772 13 8V10C13 10.7956 13.3161 11.5587 13.8787 12.1213C14.4413 12.6839 15.2044 13 16 13C16.7956 13 17.5587 12.6839 18.1213 12.1213C18.6839 11.5587 19 10.7956 19 10V8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8V10C21 11.3261 20.4732 12.5979 19.5355 13.5355C18.5979 14.4732 17.3261 15 16 15C14.6739 15 13.4021 14.4732 12.4645 13.5355C11.5268 12.5979 11 11.3261 11 10V8C11 7.44772 11.4477 7 12 7Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7C20.5523 7 21 7.44772 21 8V10C21 10.7956 21.3161 11.5587 21.8787 12.1213C22.4413 12.6839 23.2044 13 24 13C24.7956 13 25.5587 12.6839 26.1213 12.1213C26.6839 11.5587 27 10.7956 27 10V8C27 7.44772 27.4477 7 28 7C28.5523 7 29 7.44772 29 8V10C29 11.3261 28.4732 12.5979 27.5355 13.5355C26.5979 14.4732 25.3261 15 24 15C22.6739 15 21.4021 14.4732 20.4645 13.5355C19.5268 12.5979 19 11.3261 19 10V8C19 7.44772 19.4477 7 20 7Z"
        fill={color}
      />
    </svg>
  );
};

export default Storefront;
