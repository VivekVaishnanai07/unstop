const SearchIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1C4980"
        d="M14.208 12.833h-.724l-.257-.247a5.932 5.932 0 0 0 1.44-3.878 5.958 5.958 0 1 0-5.959 5.959c1.476 0 2.833-.541 3.878-1.44l.247.257v.724l4.584 4.574 1.365-1.365-4.574-4.584Zm-5.5 0a4.12 4.12 0 0 1-4.125-4.125 4.12 4.12 0 0 1 4.125-4.125 4.12 4.12 0 0 1 4.125 4.125 4.12 4.12 0 0 1-4.125 4.125Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SearchIcon;
