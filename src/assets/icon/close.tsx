const CloseIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path
      fill={props.color}
      d="M16.243 17.657 12 13.414l-4.243 4.243-1.414-1.414L10.586 12 6.343 7.757l1.414-1.414L12 10.586l4.243-4.243 1.414 1.414L13.414 12l4.243 4.243-1.414 1.414Z"
    />
  </svg>
)
export default CloseIcon
