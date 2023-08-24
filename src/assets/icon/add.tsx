import * as React from "react"
const AddIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0073E6"
        d="M31.667 22.167h-10v10h-3.334v-10h-10v-3.334h10v-10h3.334v10h10v3.334Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default AddIcon;
