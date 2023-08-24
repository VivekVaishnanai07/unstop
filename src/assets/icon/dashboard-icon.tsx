import * as React from "react";
const DashboardIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1C4980"
        d="M15.833 4.667v1.666H12.5V4.667h3.333Zm-8.333 0v5H4.167v-5H7.5Zm8.333 6.666v5H12.5v-5h3.333ZM7.5 14.667v1.666H4.167v-1.666H7.5ZM17.5 3h-6.667v5H17.5V3ZM9.167 3H2.5v8.333h6.667V3ZM17.5 9.667h-6.667V18H17.5V9.667ZM9.167 13H2.5v5h6.667v-5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default DashboardIcon;
