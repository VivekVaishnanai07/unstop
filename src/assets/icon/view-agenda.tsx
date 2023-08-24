const ViewAgenda = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6548EE"
        d="M15.833 4.167V7.5h-12.5V4.167h12.5Zm0 8.333v3.333h-12.5V12.5h12.5Zm.834-10H2.5a.836.836 0 0 0-.833.833v5c0 .459.375.834.833.834h14.167a.836.836 0 0 0 .833-.834v-5a.836.836 0 0 0-.833-.833Zm0 8.333H2.5a.836.836 0 0 0-.833.834v5c0 .458.375.833.833.833h14.167a.836.836 0 0 0 .833-.833v-5a.836.836 0 0 0-.833-.834Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default ViewAgenda