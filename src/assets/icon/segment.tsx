const MenuIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1C4980"
        d="M18.75 22.5h-15V20h15v2.5Zm7.5-15V10H3.75V7.5h22.5Zm-7.5 8.75h-15v-2.5h15v2.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M30 0H0v30h30z" />
      </clipPath>
    </defs>
  </svg>
);
export default MenuIcon;
