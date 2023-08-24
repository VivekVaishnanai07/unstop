const BagIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <rect width={50} height={50} fill="#EBE8FD" rx={12} />
    <path
      fill="#6548EE"
      d="M33.168 18.496H29.08C28.86 16.498 27.66 15 26.142 15h-3.231c-.833 0-1.616.45-2.18 1.298-.415.6-.684 1.374-.758 2.198h-4.088c-1.028 0-1.885.873-1.885 1.972v12.56C14 34.1 14.832 35 15.885 35h17.283c1.028 0 1.885-.874 1.885-1.972v-12.56c0-1.099-.833-1.972-1.885-1.972Zm-7.05 5.742h-3.183c-.734 0-1.346.65-1.346 1.449v.724c-4.162-.974-6.071-1.848-6.365-2.248v-3.495c0-.375.343-.674.759-.674H33.07c.416 0 .759.3.759.674v3.47c-.294.4-2.204 1.274-6.365 2.273v-.724c0-.8-.612-1.449-1.346-1.449Zm-4.382-6.99c.195-.276.612-.75 1.175-.75h3.231c.832 0 1.542.974 1.714 2.247h-6.659c.073-.574.27-1.098.539-1.498Zm11.456 16.479H15.861a.655.655 0 0 1-.637-.65v-7.465c1.053.549 2.962 1.223 6.463 1.997.22 1.448 1.42 2.547 2.888 2.547 1.445 0 2.644-1.099 2.84-2.547 3.5-.774 5.41-1.448 6.438-1.997v7.465c-.024.35-.318.65-.66.65Z"
    />
  </svg>
)
export default BagIcon;
